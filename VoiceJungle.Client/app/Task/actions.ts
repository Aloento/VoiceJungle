"use server";

import { prisma } from "../Shared";

export async function getTaskList() {
  return prisma.task.findMany();
}
