/*
  Warnings:

  - A unique constraint covering the columns `[categoryName,organizationId]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[productName,organizationId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Category_categoryName_organizationId_key` ON `Category`(`categoryName`, `organizationId`);

-- CreateIndex
CREATE UNIQUE INDEX `Product_productName_organizationId_key` ON `Product`(`productName`, `organizationId`);
