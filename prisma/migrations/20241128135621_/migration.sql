/*
  Warnings:

  - A unique constraint covering the columns `[cartId]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Users_cartId_key" ON "Users"("cartId");
