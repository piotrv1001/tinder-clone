import { db } from "@/lib/db";
import { ServerResponse } from "@/types/server-response";
import { Image } from "@prisma/client";

export type NewImage = Omit<Image, "id" | "createdAt" | "updatedAt">;

export class ImageRepo {
  static async createImage(newImage: NewImage): Promise<ServerResponse<Image>> {
    try {
      const image = await db.image.create({
        data: newImage,
      });
      return { status: "success", data: image };
    } catch {
      return { status: "error", message: "Failed to create image" };
    }
  }
  static async deleteImage(imageId: string): Promise<ServerResponse<Image>> {
    try {
      const image = await db.image.delete({
        where: { id: imageId },
      });
      return { status: "success", data: image };
    } catch {
      return { status: "error", message: "Failed to delete image" };
    }
  }
}
