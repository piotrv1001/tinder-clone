"use server";

import { ImageRepo } from "@/data/repo/image-repo";
import { getCurrentUser } from "@/lib/utils";
import { ServerResponse } from "@/types/server-response";
import { Image } from "@prisma/client";

export const deleteImageAction = async (
  imageId: string
): Promise<ServerResponse<Image>> => {
  try {
    const user = await getCurrentUser();
    if (!user) return { status: "error", message: "Unauthorized" };

    return await ImageRepo.deleteImage(imageId);
  } catch {
    return { status: "error", message: "Failed to delete image" };
  }
};
