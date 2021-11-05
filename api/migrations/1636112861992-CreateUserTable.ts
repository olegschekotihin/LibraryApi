import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUserTable1636112861992 implements MigrationInterface {
    name = 'CreateUserTable1636112861992'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "authors" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "birthDate" character varying NOT NULL, "countryOfBirth" character varying, "description" character varying, CONSTRAINT "PK_d2ed02fabd9b52847ccb85e6b88" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "authors"`);
    }

}
