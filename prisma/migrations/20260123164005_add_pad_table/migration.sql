-- CreateTable
CREATE TABLE "Pad" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pad_pkey" PRIMARY KEY ("id")
);
