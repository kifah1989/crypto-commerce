/*
  Warnings:

  - You are about to drop the column `categoryId` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `_CartProducts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProductColors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProductSizes` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[walletAddress]` on the table `wallets` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tokenId]` on the table `warranties` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "_CartProducts" DROP CONSTRAINT "_CartProducts_A_fkey";

-- DropForeignKey
ALTER TABLE "_CartProducts" DROP CONSTRAINT "_CartProducts_B_fkey";

-- DropForeignKey
ALTER TABLE "_ProductColors" DROP CONSTRAINT "_ProductColors_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductColors" DROP CONSTRAINT "_ProductColors_B_fkey";

-- DropForeignKey
ALTER TABLE "_ProductSizes" DROP CONSTRAINT "_ProductSizes_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductSizes" DROP CONSTRAINT "_ProductSizes_B_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_categoryId_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "categoryId";

-- AlterTable
ALTER TABLE "reviews" ADD COLUMN     "userId" TEXT;

-- DropTable
DROP TABLE "_CartProducts";

-- DropTable
DROP TABLE "_ProductColors";

-- DropTable
DROP TABLE "_ProductSizes";

-- CreateTable
CREATE TABLE "_ProductToSize" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CartToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ColorToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToSize_AB_unique" ON "_ProductToSize"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToSize_B_index" ON "_ProductToSize"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CartToProduct_AB_unique" ON "_CartToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_CartToProduct_B_index" ON "_CartToProduct"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToProduct_AB_unique" ON "_CategoryToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToProduct_B_index" ON "_CategoryToProduct"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ColorToProduct_AB_unique" ON "_ColorToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_ColorToProduct_B_index" ON "_ColorToProduct"("B");

-- CreateIndex
CREATE UNIQUE INDEX "wallets_walletAddress_key" ON "wallets"("walletAddress");

-- CreateIndex
CREATE UNIQUE INDEX "warranties_tokenId_key" ON "warranties"("tokenId");

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToSize" ADD CONSTRAINT "_ProductToSize_A_fkey" FOREIGN KEY ("A") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToSize" ADD CONSTRAINT "_ProductToSize_B_fkey" FOREIGN KEY ("B") REFERENCES "sizes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CartToProduct" ADD CONSTRAINT "_CartToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "carts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CartToProduct" ADD CONSTRAINT "_CartToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToProduct" ADD CONSTRAINT "_CategoryToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToProduct" ADD CONSTRAINT "_CategoryToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ColorToProduct" ADD CONSTRAINT "_ColorToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "colors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ColorToProduct" ADD CONSTRAINT "_ColorToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
