import { chatMessages } from "@/constants";
import ChatMessage from "./chat-message";

export default function ChatContainer() {
  return (
    <div className="flex-1 overflow-y-auto no-scrollbar bg-[#111418] p-5 space-y-2">
      {chatMessages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
}
