import MatchSlider from "@/components/home/match-slider";
import MatchFoundCard from "@/components/match-found-card";

export default function HomePage() {
  return (
    <div className="h-full bg-black flex items-center justify-center flex-col">
      <MatchSlider />
      {/* <div className="w-[375px] h-[667px]">
        <MatchFoundCard
          matchImageUrl="/test_avatar.jpg"
          userImageUrl="/test_avatar.jpg"
          matchName="Paulina"
        />
      </div> */}
    </div>
  );
}
