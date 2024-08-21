import { UserService } from "@/data/service/user-service";
import HomeWrapper from "./_components/home-wrapper";

export default async function HomePage() {
  const initialMatches = await UserService.getMatchesForLoggedUser();

  return (
    <div className="h-full bg-black flex items-center justify-center flex-col">
      <HomeWrapper initialUsers={initialMatches} />
    </div>
  );
}
