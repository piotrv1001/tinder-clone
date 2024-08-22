import ChatContainer from "@/components/chat/chat-container";
import ChatFooter from "@/components/chat/chat-footer";
import ChatHeader from "@/components/chat/chat-header";
import ProfileSidebar from "@/components/profile/profile-sidebar";
import { UserService } from "@/data/service/user-service";

type MessagesPageProps = {
  params: { id: string };
};

export default async function MessagesPage({
  params: { id },
}: MessagesPageProps) {
  const matchWithMessages = await UserService.getMatchById(id);
  if (!matchWithMessages) return null;

  return (
    <div className="grid grid-cols-3 h-full overflow-hidden">
      <div className="col-span-2">
        <div className="flex flex-col h-full">
          <ChatHeader
            imgUrl={matchWithMessages.match.images[0].url}
            name={matchWithMessages.match.name}
            date={matchWithMessages.match.createdAt}
          />
          <ChatContainer />
          <ChatFooter />
        </div>
      </div>
      {matchWithMessages.match && (
        <ProfileSidebar matchedProfile={matchWithMessages.match} />
      )}
    </div>
  );
}
