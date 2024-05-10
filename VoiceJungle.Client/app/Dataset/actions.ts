"use server";

import { PrismaClient } from "@prisma/client";
import fs from "fs";
import { parse } from "papaparse";
import path from "path";

const prisma = new PrismaClient();

export async function listDatasets() {
  return await prisma.dataset.findMany();
}

export async function getDataset(id: number) {
  const dataset = await prisma.dataset.findUniqueOrThrow({
    where: {
      id,
    },
  });

  const workDir = dataset.workDir;
  const metadataPath = path.join(workDir, 'metadata.csv');

  const csvFile = fs.readFileSync(metadataPath, 'utf8');
  const { data } = parse(csvFile, { delimiter: "|" });

  return data;
}

export async function addDataset(name: string, workDir: string) {
  const wavsPath = path.join(workDir, 'wavs');
  const metadataPath = path.join(workDir, 'metadata.csv');

  if (!fs.existsSync(wavsPath) || !fs.existsSync(metadataPath)) {
    throw new Error('Invalid dataset directory');
  }

  const dataset = await prisma.dataset.create({
    data: {
      workDir,
    },
  });

  return dataset;
}
