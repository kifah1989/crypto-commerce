-- DropForeignKey
ALTER TABLE "wallets" DROP CONSTRAINT "wallets_userId_fkey";

-- DropForeignKey
ALTER TABLE "warranties" DROP CONSTRAINT "warranties_userId_fkey";

-- AlterTable
ALTER TABLE "wallets" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "warranties" ALTER COLUMN "tokenId" DROP NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "wallets" ADD CONSTRAINT "wallets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "warranties" ADD CONSTRAINT "warranties_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
