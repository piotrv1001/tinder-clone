import { ChatMessage } from "./types/chat-message";
import { DatingGoal } from "./types/dating-goal";

export const chatMessages: ChatMessage[] = [
  {
    id: "1",
    content: "Hey! How are you?",
    createdAt: new Date(),
    isOtherPerson: false,
  },
  {
    id: "2",
    content: "I'm good, thanks! How about you?",
    createdAt: new Date(),
    isOtherPerson: true,
  },
  {
    id: "3",
    content: "Whaaaaaaat? That's awesome!",
    createdAt: new Date(),
    isOtherPerson: true,
    avatarUrl: "/test_avatar.jpg",
  },
  {
    id: "4",
    content: "You are a dumbass",
    createdAt: new Date(),
    isOtherPerson: false,
  },
]

export const images = [
  {
    id: "1",
    src: "/test_avatar.jpg",
  },
  {
    id: "2",
    src: "/test_avatar.jpg",
  },
  {
    id: "3",
    src: "/test_avatar.jpg",
  },
];

export const datingGoals: DatingGoal[] = [
  {
    title: "Long-term partner",
    emoji: "💘",
    textColor: "#ba52f5",
    bgColor: "#200030",
  },
  {
    title: "Long-term, open to short",
    emoji: "😍",
    textColor: "#f13b2d",
    bgColor: "#2f0701",
  },
  {
    title: "Short-term, open to long",
    emoji: "🥂",
    textColor: "#cd7105",
    bgColor: "#2d1000",
  },
  {
    title: "Short-term fun",
    emoji: "🎉",
    textColor: "#129e68",
    bgColor: "#001916",
  },
  {
    title: "New friends",
    emoji: "👋",
    textColor: "#199a9f",
    bgColor: "#031619",
  },
  {
    title: "Still figuring it out",
    emoji: "🤔",
    textColor: "#1786ff",
    bgColor: "#00132e",
  },
];
