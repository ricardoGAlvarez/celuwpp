/*
  Warnings:

  - You are about to drop the column `organizationId` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `product` table. All the data in the column will be lost.
  - You are about to drop the `domain` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `membership` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `organization` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `category` DROP FOREIGN KEY `Category_organizationId_fkey`;

-- DropForeignKey
ALTER TABLE `domain` DROP FOREIGN KEY `Domain_organizationId_fkey`;

-- DropForeignKey
ALTER TABLE `membership` DROP FOREIGN KEY `Membership_organizationId_fkey`;

-- DropForeignKey
ALTER TABLE `membership` DROP FOREIGN KEY `Membership_userId_fkey`;

-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_organizationId_fkey`;

-- DropIndex
DROP INDEX `Category_categoryName_organizationId_key` ON `category`;

-- DropIndex
DROP INDEX `Product_productName_organizationId_key` ON `product`;

-- AlterTable
ALTER TABLE `category` DROP COLUMN `organizationId`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `organizationId`;

-- DropTable
DROP TABLE `domain`;

-- DropTable
DROP TABLE `membership`;

-- DropTable
DROP TABLE `organization`;
