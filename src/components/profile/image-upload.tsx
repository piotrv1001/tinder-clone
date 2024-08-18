import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "lucide-react";
import ImageButton from "./image-button";

export default function ImageUpload() {
  return (
    <Label
      htmlFor="picture"
      className="w-full aspect-[3/4] rounded-[8px] border-dashed border-4 border-[#505965] bg-[#21262e] cursor-pointer relative"
    >
      <ImageButton className="border-white bg-gradient-to-tr from-[#fd267a] to-[#ff6036]">
        <PlusIcon size={22} className="text-white" />
      </ImageButton>
      <Input id="picture" type="file" accept="image/*" className="hidden" />
    </Label>
  );
}
