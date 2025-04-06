import { HttpRequest, HttpResponse } from "@angular/common/http";
import { AuthLoginTx } from "../../auth/models/login-tx.model";
import { AuthMeRx } from "../../auth/models/me-rx.model";
import { ChatConversationsRx, ChatConversationRx } from "../../chat/models/conversation-rx.model";
import { ChatMessageRx } from "../../chat/models/message-rx.model";
import { ChatMessageTx } from "../../chat/models/message-tx.model";
import { ConversationRxMockData } from "./data/conversation-rx.data";
import { AuthMeMockData } from "./data/me-rx.data";
import { MockRoute } from "./mock-route.model";

export const MockApiRoutes = [
  <MockRoute<AuthLoginTx, {}>>{
    req: new HttpRequest('POST', '/login', { username: 'dummy', password: 'dummypassword' }),
    res: () => new HttpResponse({ status: 200, body: {} }),
  },

  <MockRoute<{}, AuthMeRx>>{
    req: new HttpRequest('GET', '/me'),
    res: () => new HttpResponse({ status: 200, body: structuredClone(AuthMeMockData) }),
  },

  <MockRoute<{}, ChatConversationsRx>>{
    req: new HttpRequest('GET', '/messages/conversation'),
    res: () => new HttpResponse({ status: 200, body: structuredClone(ConversationRxMockData) }),
  },

  <MockRoute<ChatMessageTx, {}>>{
    req: new HttpRequest('POST', '/messages', { senderId: '124', receiverId: '123', content: 'Hello World', status: 'SENT' }),
    res: (req = new HttpRequest('POST', '/messages', { senderId: '124', receiverId: '123', content: 'Hello World', status: 'SENT' })) => {
      const messageTx = req.body!;
      const conversation = ConversationRxMockData[messageTx.receiverId];
      console.log('[MockApi]', req.body); // {senderId: '124', receiverId: '123', content: 'asfqf', status: 'SENT'}
      const lastMessage = conversation.messages[0];
      let senderName = lastMessage.senderName;
      let receiverName = lastMessage.receiverName;
      if (lastMessage.receiverId != messageTx.receiverId) {
        [senderName, receiverName] = [receiverName, senderName];
      }
      const messageRx: ChatMessageRx = {
        id: String(Number(lastMessage.id) + 1),
        senderId: messageTx.senderId,
        receiverId: messageTx.receiverId,
        senderName: 'Jakob',
        receiverName: 'Jonas',
        content: messageTx.content,
        status: messageTx.status,
        statusTimestamp: new Date().toISOString(),
        createdTimestamp: new Date().toISOString(),
      };
      ConversationRxMockData[messageTx.receiverId].messages.unshift(messageRx);
      console.log('[MockApi]', ConversationRxMockData[messageTx.receiverId].messages);
      return new HttpResponse({ status: 200, body: {} });
    }
  },

  <MockRoute<{}, ChatConversationRx>>{
    req: new HttpRequest('GET', '/messages/conversation/{conversationId}'),
    res: (req = new HttpRequest('GET', '/messages/conversation/123')) => {
      const id = req.url.split('/').pop();
      return new HttpResponse({ status: 200, body: structuredClone(ConversationRxMockData[id!]) });
    }
  },
];
