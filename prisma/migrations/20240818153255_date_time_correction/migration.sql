-- AlterTable
ALTER TABLE "Ingredients" ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "deletedAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Recipe" ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "deletedAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "deletedAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;
