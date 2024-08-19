"use client";

import { Image } from "@prisma/client";
import ImagePreview from "./image-preview";
import ImageUpload from "./image-upload";
import { useState } from "react";
import { deleteImageAction } from "@/actions/delete-image-action";
import { toast } from "../ui/use-toast";

type ImageGridProps = {
  initialImages: Image[];
};

export default function ImageGrid({ initialImages }: ImageGridProps) {
  const [images, setImages] = useState(initialImages);

  const handleImageUpload = (image: Image) => {
    setImages((prevImages) => [...prevImages, image]);
  };

  const handleDeleteImage = async (imageId: string) => {
    const deleteImageRes = await deleteImageAction(imageId);
    if (deleteImageRes.status === "success") {
      setImages((prevImages) =>
        prevImages.filter((image) => image.id !== imageId)
      );
      toast({
        variant: "success",
        description: "Image deleted successfully",
      });
    } else {
      toast({
        variant: "error",
        description: deleteImageRes.message,
      });
    }
  };

  return (
    <div className="grid grid-cols-3 gap-2 px-1 py-2">
      {images.map(({ id, url }) => (
        <ImagePreview
          key={id}
          src={url}
          onClick={() => handleDeleteImage(id)}
        />
      ))}
      {Array.from({ length: 9 - images.length }).map((_, index) => (
        <ImageUpload key={index} onImageUpload={handleImageUpload} />
      ))}
    </div>
  );
}
