export class InitialSchema1727978709546 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`client\` (\`id\` int NOT NULL AUTO_INCREMENT, \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`registration_date\` datetime NOT NULL, \`client_type\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL, \`comments\` varchar(255) NOT NULL, \`gender\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`uuid\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`enterprise\` (\`id\` int NOT NULL AUTO_INCREMENT, \`enterprise_name\` varchar(255) NOT NULL, \`speciality\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`website\` varchar(255) NOT NULL, \`registration_date\` datetime NOT NULL, \`status\` varchar(255) NOT NULL, \`tax_id\` varchar(255) NOT NULL, \`neq_id\` varchar(255) NOT NULL, \`number_of_employees\` int NOT NULL, \`annual_revenue\` decimal NOT NULL, \`enterprise_type\` varchar(255) NOT NULL, \`contact_person\` varchar(255) NOT NULL, \`contact_phone\` varchar(255) NOT NULL, \`founded_date\` datetime NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`uuid\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`project\` (\`id\` int NOT NULL AUTO_INCREMENT, \`project_name\` varchar(255) NOT NULL, \`project_description\` text NOT NULL, \`start_date\` datetime NOT NULL, \`end_date\` datetime NULL, \`status\` varchar(255) NOT NULL, \`work_address\` varchar(255) NOT NULL, \`work_type\` varchar(255) NOT NULL, \`estimated_budget\` decimal NOT NULL, \`final_cost\` decimal NULL, \`vat_rate\` decimal NOT NULL, \`vat_amount\` decimal NOT NULL, \`total_amount\` decimal NOT NULL, \`notes\` text NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`uuid\` varchar(255) NOT NULL, \`clientId\` int NULL, \`enterpriseId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`project\` ADD CONSTRAINT \`FK_816f608a9acf4a4314c9e1e9c66\` FOREIGN KEY (\`clientId\`) REFERENCES \`client\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`project\` ADD CONSTRAINT \`FK_08db792975ade15c4779010bfe6\` FOREIGN KEY (\`enterpriseId\`) REFERENCES \`enterprise\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`project\` DROP FOREIGN KEY \`FK_08db792975ade15c4779010bfe6\``);
        await queryRunner.query(`ALTER TABLE \`project\` DROP FOREIGN KEY \`FK_816f608a9acf4a4314c9e1e9c66\``);
        await queryRunner.query(`DROP TABLE \`project\``);
        await queryRunner.query(`DROP TABLE \`enterprise\``);
        await queryRunner.query(`DROP TABLE \`client\``);
    }
}


