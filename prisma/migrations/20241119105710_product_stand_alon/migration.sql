-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "price" INTEGER,
    "quantity" INTEGER,
    "warrantyId" INTEGER,
    "categoryId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "products_warrantyId_fkey" FOREIGN KEY ("warrantyId") REFERENCES "warranties" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_products" ("categoryId", "createdAt", "description", "id", "image", "name", "price", "quantity", "updatedAt", "warrantyId") SELECT "categoryId", "createdAt", "description", "id", "image", "name", "price", "quantity", "updatedAt", "warrantyId" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
CREATE UNIQUE INDEX "products_warrantyId_key" ON "products"("warrantyId");
CREATE INDEX "products_name_idx" ON "products"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
