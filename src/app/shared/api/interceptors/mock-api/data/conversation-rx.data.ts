import { ChatConversationsRx } from "../../../chat/models/conversation-rx.model";

export const ConversationRxMockData: ChatConversationsRx = {
  "123": {
    userImage: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    userName: "Kai",
    messages: [
      {
        id: '2',
        senderId: '123',
        receiverId: '124',
        senderName: 'Kai',
        receiverName: 'Jakob',
        content: 'Hello, how are you?',
        status: 'SENT',
        statusTimestamp: '2025-04-04T21:55:00.000+00:00',
        createdTimestamp: '2025-04-04T21:53:00.000+00:00',
      },
      {
        id: '1',
        senderId: '124',
        receiverId: '123',
        senderName: 'Jakob',
        receiverName: 'Kai',
        content: 'I\'m good, thanks! How about you?',
        status: 'READ',
        statusTimestamp: '2025-04-04T21:52:36.713+00:00',
        createdTimestamp: '2025-04-04T21:52:36.713+00:00',
      },
    ],
  },
  "125": {
    userImage: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    userName: "Jonas",
    messages: [
      {
        id: '2',
        senderId: '124',
        receiverId: '125',
        senderName: 'Jakob',
        receiverName: 'Jonas',
        content: 'Hello, how are you?',
        status: 'SENT',
        statusTimestamp: '2025-04-04T21:55:00.000+00:00',
        createdTimestamp: '2025-04-04T21:53:00.000+00:00',
      },
      {
        id: '1',
        senderId: '125',
        receiverId: '124',
        senderName: 'Jonas',
        receiverName: 'Jakob',
        content: 'I\'m good, thanks! How about you?',
        status: 'READ',
        statusTimestamp: '2025-04-04T21:52:36.713+00:00',
        createdTimestamp: '2025-04-04T21:52:36.713+00:00',
      },
    ],
  }
};
