import { EntitySchema } from 'typeorm';

export const Project = new EntitySchema({
    name: 'Project',
    tableName: 'project',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        project_name: {
            type: 'varchar',
        },
        project_description: {
            type: 'text',
        },
        start_date: {
            type: 'datetime',
        },
        end_date: {
            type: 'datetime',
            nullable: true,
        },
        status: {
            type: 'varchar',
        },
        work_address: {
            type: 'varchar',
        },
        work_type: {
            type: 'varchar',
        },
        estimated_budget: {
            type: 'decimal',
        },
        final_cost: {
            type: 'decimal',
            nullable: true,
        },
        vat_rate: {
            type: 'decimal',
        },
        vat_amount: {
            type: 'decimal',
        },
        total_amount: {
            type: 'decimal',
        },
        notes: {
            type: 'text',
            nullable: true,
        },
        created_at: {
            type: 'datetime',
            createDate: true,
        },
        updated_at: {
            type: 'datetime',
            updateDate: true,
        },
        uuid: {
            type: 'varchar',
        },
    },
    relations: {
        client: {
            target: 'Client',
            type: 'many-to-one',
            joinColumn: true,
        },
        enterprise: {
            target: 'Enterprise',
            type: 'many-to-one',
            joinColumn: true,
        },
    },
});
