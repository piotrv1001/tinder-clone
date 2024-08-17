export type ChatMessage = {
  id: string;
  content: string;
  createdAt: Date;
  isOtherPerson: boolean;
  avatarUrl?: string;
};
