"use server";

import { prisma } from "../Shared";

export async function listTasks() {
  return prisma.task.findMany();
}
