import ChatContainer from "@/components/chat/chat-container";
import ChatFooter from "@/components/chat/chat-footer";
import ChatHeader from "@/components/chat/chat-header";
import ProfileSidebar from "@/components/profile/profile-sidebar";

export default function MessagesPage() {
  return (
    <div className="grid grid-cols-3 h-full overflow-hidden">
      <div className="col-span-2">
        <div className="flex flex-col h-full">
          <ChatHeader
            imgUrl="/test_avatar.jpg"
            name="Julia"
            date={new Date()}
          />
          <ChatContainer />
          <ChatFooter />
        </div>
      </div>
      <ProfileSidebar />
    </div>
  );
}
