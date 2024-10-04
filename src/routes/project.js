import express from 'express';
import { getRepository } from 'typeorm';
import { Project } from '../entity/Project.js';
import { Client } from '../entity/Client.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// GET all projects
router.get('/projects', authenticateToken, async (req, res) => {
    const projects = await getRepository(Project).find();
    res.json(projects);
});

// GET project by ID
router.get('/projects/:id', authenticateToken, async (req, res) => {
    const project = await getRepository(Project).findOne(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
});

// POST create new project (requires client_id)
router.post('/projects', authenticateToken, async (req, res) => {
    const { client_id, ...projectData } = req.body;

    // Check if client exists
    const client = await getRepository(Client).findOne(client_id);
    if (!client) {
        return res.status(400).json({ message: 'Client not found. A project must be linked to a valid client.' });
    }

    // Create new project
    const project = getRepository(Project).create({
        ...projectData,
        client,
    });
    const result = await getRepository(Project).save(project);
    res.status(201).json(result);
});

// PUT update project
router.put('/projects/:id', authenticateToken, async (req, res) => {
    const project = await getRepository(Project).findOne(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });

    getRepository(Project).merge(project, req.body);
    const result = await getRepository(Project).save(project);
    res.json(result);
});

// DELETE project
router.delete('/projects/:id', authenticateToken, async (req, res) => {
    const result = await getRepository(Project).delete(req.params.id);
    if (result.affected === 0) return res.status(404).json({ message: 'Project not found' });
    res.json({ message: 'Project deleted' });
});

export default router;
