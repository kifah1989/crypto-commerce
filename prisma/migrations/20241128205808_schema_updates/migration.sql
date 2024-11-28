/*
  Warnings:

  - You are about to drop the column `name` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `sizes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[category]` on the table `categories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[size]` on the table `sizes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `sizes` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "categories_name_key";

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "name",
ADD COLUMN     "category" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "sizes" DROP COLUMN "name",
ADD COLUMN     "size" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "categories_category_key" ON "categories"("category");

-- CreateIndex
CREATE UNIQUE INDEX "sizes_size_key" ON "sizes"("size");
