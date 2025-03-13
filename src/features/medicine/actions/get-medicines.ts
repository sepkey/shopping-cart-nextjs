"use server";

import { ParsedSearchParams } from "@/lib/search-params";
import fs from "fs";
import path from "path";
import type { Medicine } from "../types";

function readDbFile() {
  try {
    const filePath = path.join(process.cwd(), "db.json");
    const fileData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileData);
  } catch (error) {
    console.error("Error reading db.json:", error);
    return { medicines: [] };
  }
}

export async function getMedicines(searchParams: ParsedSearchParams) {
  const page = (await searchParams).page || 1;
  const size = (await searchParams).size || 10;

  const skip = (page - 1) * size;
  const take = size;

  const data = readDbFile();
  const allMedicines = data.medicines as Medicine[];
  const count = allMedicines.length;

  const medicines = allMedicines.slice(skip, skip + take);

  return {
    medicines,
    metadata: { count, hasNextPage: count > skip + take },
  };
}
