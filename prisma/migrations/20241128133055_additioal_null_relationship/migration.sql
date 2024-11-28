/*
  Warnings:

  - Added the required column `productId` to the `warranties` table without a default value. This is not possible if the table is not empty.
  - Made the column `tokenId` on table `warranties` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "warranties" ADD COLUMN     "productId" INTEGER NOT NULL,
ALTER COLUMN "tokenId" SET NOT NULL;
