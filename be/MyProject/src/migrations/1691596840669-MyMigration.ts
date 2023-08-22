import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1691596840669 implements MigrationInterface {
    name = 'MyMigration1691596840669'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "user_name" character varying NOT NULL, "user_fullName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "profile_foto" character varying, "profile_desk" character varying, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "threads" ("id" SERIAL NOT NULL, "aut_img" character varying, "content" character varying NOT NULL, "postd" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_d8a74804c34fc3900502cd27275" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "threads" ADD CONSTRAINT "FK_256dd2e4946d6768c5583caa072" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "threads" DROP CONSTRAINT "FK_256dd2e4946d6768c5583caa072"`);
        await queryRunner.query(`DROP TABLE "threads"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
