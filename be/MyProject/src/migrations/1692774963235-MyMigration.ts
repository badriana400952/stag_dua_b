import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1692774963235 implements MigrationInterface {
    name = 'MyMigration1692774963235'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "threads" DROP COLUMN "aut_img"`);
        await queryRunner.query(`ALTER TABLE "threads" DROP COLUMN "postd"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user_name"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user_fullName"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "profile_foto"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "profile_desk"`);
        await queryRunner.query(`ALTER TABLE "threads" ADD "image" character varying`);
        await queryRunner.query(`ALTER TABLE "threads" ADD "posted_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "username" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "profile_picture" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "profile_deskripsi" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "profile_deskripsi"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "profile_picture"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "threads" DROP COLUMN "posted_at"`);
        await queryRunner.query(`ALTER TABLE "threads" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "profile_desk" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "profile_foto" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "user_fullName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "user_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "threads" ADD "postd" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "threads" ADD "aut_img" character varying`);
    }

}
