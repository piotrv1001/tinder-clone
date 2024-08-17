import { images } from "@/constants";
import ImageSlider from "./image-slider";

export default function ProfileSidebar() {
  return (
    <div className="h-full border-l border-[#3c444f] overflow-y-auto no-scrollbar">
      <div className="w-full aspect-[4/5]">
        <ImageSlider images={images} />
      </div>
    </div>
  )
}