-- CreateTable
CREATE TABLE "public"."Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT,
    "description" TEXT,
    "available" BOOLEAN NOT NULL,
    "stock" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "features" JSONB,
    "variants" JSONB,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
