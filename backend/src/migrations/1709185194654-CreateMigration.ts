import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMigration1709185194654 implements MigrationInterface {
    name = 'CreateMigration1709185194654'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "confirmPassword" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "confirmPassword"`);
    }

}
