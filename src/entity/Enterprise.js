import { EntitySchema } from 'typeorm';

export const Enterprise = new EntitySchema({
    name: 'Enterprise',
    tableName: 'enterprise',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        enterprise_name: {
            type: 'varchar',
        },
        speciality: {
            type: 'varchar',
        },
        email: {
            type: 'varchar',
        },
        phone: {
            type: 'varchar',
        },
        address: {
            type: 'varchar',
        },
        website: {
            type: 'varchar',
        },
        registration_date: {
            type: 'datetime',
        },
        status: {
            type: 'varchar',
        },
        tax_id: {
            type: 'varchar',
        },
        neq_id: {
            type: 'varchar',
        },
        number_of_employees: {
            type: 'int',
        },
        annual_revenue: {
            type: 'decimal',
        },
        enterprise_type: {
            type: 'varchar',
        },
        contact_person: {
            type: 'varchar',
        },
        contact_phone: {
            type: 'varchar',
        },
        founded_date: {
            type: 'datetime',
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
        projects: {
            target: 'Project',
            type: 'one-to-many',
            inverseSide: 'enterprise',
        },
    },
});
