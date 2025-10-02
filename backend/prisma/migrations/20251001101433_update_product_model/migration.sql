-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "image" TEXT,
    "description" TEXT,
    "available" BOOLEAN NOT NULL,
    "stock" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "features" JSONB,
    "variants" JSONB
);
