import {MigrationInterface, QueryRunner} from "typeorm";

export class LibraryTable1637099383325 implements MigrationInterface {
    name = 'LibraryTable1637099383325'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "book" ("id" SERIAL NOT NULL, "title" character varying, "description" character varying, "codeId" character varying, "author" character varying, "pagesCount" character varying, "publicationDate" character varying, CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "author" ("id" SERIAL NOT NULL, "firstName" character varying, "lastName" character varying, "birthDate" character varying, "countryOfBirth" character varying, "description" character varying, CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "author_books_book" ("authorId" integer NOT NULL, "bookId" integer NOT NULL, CONSTRAINT "PK_6b6bf224c7ce78773e95bded3f2" PRIMARY KEY ("authorId", "bookId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e9ac29df6d093aa0b8079f1d15" ON "author_books_book" ("authorId") `);
        await queryRunner.query(`CREATE INDEX "IDX_34342925729041ac5301b289a9" ON "author_books_book" ("bookId") `);
        await queryRunner.query(`ALTER TABLE "author_books_book" ADD CONSTRAINT "FK_e9ac29df6d093aa0b8079f1d151" FOREIGN KEY ("authorId") REFERENCES "author"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "author_books_book" ADD CONSTRAINT "FK_34342925729041ac5301b289a9a" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "author_books_book" DROP CONSTRAINT "FK_34342925729041ac5301b289a9a"`);
        await queryRunner.query(`ALTER TABLE "author_books_book" DROP CONSTRAINT "FK_e9ac29df6d093aa0b8079f1d151"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_34342925729041ac5301b289a9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e9ac29df6d093aa0b8079f1d15"`);
        await queryRunner.query(`DROP TABLE "author_books_book"`);
        await queryRunner.query(`DROP TABLE "author"`);
        await queryRunner.query(`DROP TABLE "book"`);
    }

}
