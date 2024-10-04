import { EntitySchema } from 'typeorm';

export const Client = new EntitySchema({
    name: 'Client',
    tableName: 'client',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        first_name: {
            type: 'varchar',
        },
        last_name: {
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
        registration_date: {
            type: 'datetime',
        },
        client_type: {
            type: 'varchar',
        },
        status: {
            type: 'varchar',
        },
        comments: {
            type: 'varchar',
        },
        gender: {
            type: 'varchar',
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
            inverseSide: 'client',
        },
    },
});
