/*
  Warnings:

  - Changed the type of `warrantyPeriod` on the `warranties` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "warranties" DROP COLUMN "warrantyPeriod",
ADD COLUMN     "warrantyPeriod" INTEGER NOT NULL;
