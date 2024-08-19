import { PlusIcon } from "lucide-react";
import ImageButton from "./image-button";
import { UploadButton } from "@/lib/uploadthing";
import { toast } from "../ui/use-toast";
import { Image } from "@prisma/client";

type ImageUploadProps = {
  onImageUpload: (image: Image) => void;
};

export default function ImageUpload({ onImageUpload }: ImageUploadProps) {
  return (
    <div className="relative">
      <UploadButton
        className="w-full aspect-[3/4] rounded-[8px] border-dashed border-4 border-[#505965] bg-[#21262e] cursor-pointer ut-button:opacity-0 ut-button:h-full ut-allowed-content:hidden"
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log("Response", res);
          if (res.length > 0) {
            const serverData = res[0].serverData;
            if (serverData.status === "success") {
              const image = JSON.parse(serverData.data.image);
              onImageUpload(image);
            } else {
              toast({
                variant: "error",
                description: serverData.message,
              });
            }
          }
        }}
        onUploadError={(error: Error) => {
          toast({
            variant: "error",
            description: error.message,
          });
        }}
      />
      <ImageButton className="border-white bg-gradient-to-tr from-[#fd267a] to-[#ff6036]">
        <PlusIcon size={22} className="text-white" />
      </ImageButton>
    </div>
  );
}
