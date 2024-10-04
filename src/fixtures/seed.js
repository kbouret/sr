import { createConnection } from 'typeorm';
import { Client } from '../entity/Client.js';
import { Project } from '../entity/Project.js';
import { Enterprise } from '../entity/Enterprise.js';
import { v4 as uuidv4 } from 'uuid';

const seedDatabase = async () => {
    const connection = await createConnection();

    // Crée des clients factices
    const clients = connection.getRepository(Client).create([
        { first_name: 'John', last_name: 'Doe', email: 'john@example.com', phone: '123456789', address: '1122 Rue Notre-Dame, Trois-Rivières, QC G9A 5K6', client_type: 'individual', status: 'Active', comments: '', gender: 'Male', registration_date: new Date('2024-10-01'), uuid: uuidv4() },
        { first_name: 'Jane', last_name: 'Doe', email: 'jane@example.com', phone: '987654321', address: '3456 Boulevard Charest Est, Québec, QC G1K 3J9', client_type: 'company', status: 'Pending', comments: '', gender: 'Female', registration_date: new Date('2024-10-02'), uuid: uuidv4() },
        // Add one more client
    ]);

    await connection.getRepository(Client).save(clients);

    // Crée des entreprises factices
    const enterprises = connection.getRepository(Enterprise).create([
        { enterprise_name: 'Enterprise A', speciality: 'Construction', email: 'enterpriseA@example.com', phone: '111222333', address: '5678 Boulevard Saint-Laurent, Québec, QC G1R 4S2', website: 'enterpriseA.com', status: 'Active', tax_id: '123456', neq_id: '654321', number_of_employees: 50, annual_revenue: 500000, enterprise_type: 'LLC', contact_person: 'Alice', contact_phone: '444555666', registration_date: new Date('2024-03-01'), founded_date: new Date(), uuid: uuidv4() },
        { enterprise_name: 'Enterprise B', speciality: 'Renovation', email: 'enterpriseB@example.com', phone: '444555666', address: '9101 Avenue du Parc, Laval, QC H7N 6T4', website: 'enterpriseB.com', status: 'Inactive', tax_id: '789101', neq_id: '121314', number_of_employees: 30, annual_revenue: 300000, enterprise_type: 'Corporation', contact_person: 'Bob', contact_phone: '555666777', registration_date: new Date('2024-07-01'), founded_date: new Date(), uuid: uuidv4() },
        // Add one more enterprise
    ]);

    await connection.getRepository(Enterprise).save(enterprises);

    // Crée des projets factices
    const projects = connection.getRepository(Project).create([
        { project_name: 'Project 1', project_description: 'Renovation of building', start_date: new Date(), status: 'in progress', client: clients[0], enterprise: enterprises[0], work_address: '2345 Chemin Sainte-Foy, Québec, QC G1V 1T1', work_type: 'renovation', estimated_budget: 10000, final_cost: 8000, vat_rate: 15, vat_amount: 1200, total_amount: 9200, uuid: uuidv4() },
        { project_name: 'Project 2', project_description: 'New construction', start_date: new Date(), status: 'on hold', client: clients[1], enterprise: enterprises[1], work_address: '6789 Rue Sainte-Catherine Ouest, Montréal, QC H3H 2K3', work_type: 'construction', estimated_budget: 20000, final_cost: null, vat_rate: 15, vat_amount: 3000, total_amount: 23000, uuid: uuidv4() },
        // Add more projects
    ]);

    await connection.getRepository(Project).save(projects);

    console.log('Database seeded');

    // Fermeture de la connexion
    await connection.close();
};

seedDatabase().catch((error) => console.log(error));
