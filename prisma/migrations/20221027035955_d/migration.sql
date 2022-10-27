/*
  Warnings:

  - You are about to drop the column `leeciones` on the `Curso` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Curso" DROP COLUMN "leeciones",
ADD COLUMN     "lecciones" INTEGER[];
