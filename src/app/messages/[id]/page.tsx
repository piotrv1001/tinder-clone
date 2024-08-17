import MessageHeader from "@/components/message-header";
import ProfileSidebar from "@/components/profile-sidebar";

export default function MessagesPage() {
  return (
    <div className="grid grid-cols-3 h-full">
      <div className="col-span-2">
        <MessageHeader
          imgUrl="/test_avatar.jpg"
          name="Julia"
          date={new Date()}
        />
      </div>
      <div className="col-span-1 h-full">
        <ProfileSidebar />
      </div>
    </div>
  );
}
