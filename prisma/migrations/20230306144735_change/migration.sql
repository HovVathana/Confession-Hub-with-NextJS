/*
  Warnings:

  - You are about to drop the column `userId` on the `Post` table. All the data in the column will be lost.
  - Added the required column `username` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userId_fkey";

-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "username" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "userId",
ADD COLUMN     "username" TEXT NOT NULL;
