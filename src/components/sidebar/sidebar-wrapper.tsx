import { UserService } from "@/data/service/user-service";
import Sidebar from "./sidebar";

export default async function SidebarWrapper() {
  const matchedUsers = await UserService.getMatchedUsersForLoggedUser();
  return <Sidebar matches={matchedUsers} />;
}
