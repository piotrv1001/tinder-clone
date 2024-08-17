import ChatContainer from "@/components/chat-container";
import ChatFooter from "@/components/chat-footer";
import MessageHeader from "@/components/message-header";
import ProfileSidebar from "@/components/profile-sidebar";

export default function MessagesPage() {
  return (
    <div className="grid grid-cols-3 h-full overflow-hidden">
      <div className="col-span-2">
        <div className="flex flex-col h-full">
          <MessageHeader
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
