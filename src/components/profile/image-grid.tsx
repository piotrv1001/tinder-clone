"use client";

import ImagePreview from "./image-preview";
import ImageUpload from "./image-upload";

export default function ImageGrid() {
  return (
    <div className="grid grid-cols-3 gap-2 px-1 py-2">
      <ImagePreview src="/test_avatar.jpg" onClick={() => {}} />
      <ImageUpload />
      <ImageUpload />
      <ImageUpload />
      <ImageUpload />
      <ImageUpload />
      <ImageUpload />
      <ImageUpload />
      <ImageUpload />
    </div>
  );
}
