import ImageSlider from "@/components/image-slider";
import { images } from "@/constants";

export default function HomePage() {
  return (
    <div className="h-full bg-black flex items-center justify-center flex-col">
      <ImageSlider images={images} />
    </div>
  );
}