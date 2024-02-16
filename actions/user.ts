'use server';
import { db } from "@/app/lib/db";

export const create = async () => {
    console.log("Hallo hs")
  return await db.user.create({
    data: {
      email: "Wurster@gmail.com",
      name: "Wurster",
    },
  });
}