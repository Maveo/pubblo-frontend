import { ChatMessageRx } from "./message-rx.model";

export interface ChatConversationRx {
  userImage: string,
  userName: string,
  messages: ChatMessageRx[], // latest message first in array
}

export interface ChatConversationsRx {
  [conversationId: string]: ChatConversationRx
}
