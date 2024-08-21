import { db } from "@/lib/db";
import { ServerResponse } from "@/types/server-response";
import { Rejection } from "@prisma/client";
import { addDays } from "date-fns";

export type NewRejection = Omit<
  Rejection,
  "id" | "createdAt" | "updatedAt" | "expiresAt"
>;

export class RejectionRepo {
  static async createRejection(
    newRejection: NewRejection
  ): Promise<ServerResponse<Rejection>> {
    try {
      const rejectionDays = 14;
      const expiresAt = addDays(new Date(), rejectionDays);
      const rejection = await db.rejection.create({
        data: {
          ...newRejection,
          expiresAt,
        },
      });
      return { status: "success", data: rejection };
    } catch {
      return { status: "error", message: "Failed to create rejection" };
    }
  }
}
