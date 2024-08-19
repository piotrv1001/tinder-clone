import { ImageRepo } from "@/data/repo/image-repo";
import { getCurrentUser } from "@/lib/utils";
import { ServerResponse } from "@/types/server-response";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async () => {
      const user = await getCurrentUser();
      if (!user) throw new UploadThingError("Unauthorized");

      return { userId: user.id };
    })
    .onUploadComplete(
      async ({
        metadata,
        file,
      }): Promise<ServerResponse<{ image: string }>> => {
        if (!metadata.userId)
          return { status: "error", message: "Unauthorized" };

        const createImageRes = await ImageRepo.createImage({
          url: file.url,
          userId: metadata.userId,
        });
        if (createImageRes.status === "error") return createImageRes;

        return {
          status: "success",
          data: { image: JSON.stringify(createImageRes.data) },
        };
      }
    ),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
