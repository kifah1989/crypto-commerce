/*
  Warnings:

  - Made the column `userId` on table `reviews` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_userId_fkey";

-- AlterTable
ALTER TABLE "reviews" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
