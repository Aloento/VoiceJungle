"use server";

import { prisma } from "../Shared";

export async function listModels() {
  return prisma.model.findMany();
}
