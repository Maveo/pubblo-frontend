import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { ConversationRxMockData } from "./data/conversation-rx.data";
import { AuthMeMockData } from "./data/me-rx.data";
import { ChatMessageTx } from "../../chat/models/message-tx.model";
import { ChatMessageRx } from "../../chat/models/message-rx.model";

@Injectable()
export class MockApiHttpRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    let response = new HttpResponse({ status: 404, body: {}, statusText: 'Not Found' });

    console.log('[MockApi] request url:', req.url);

    switch (req.url) {
      case '/messages/conversation':
        response = new HttpResponse({ status: 200, body: structuredClone(ConversationRxMockData) });
        break;
      case '/login':
        response = new HttpResponse({ status: 200, body: {} });
        break;
      case '/me':
        response = new HttpResponse({ status: 200, body: structuredClone(AuthMeMockData) });
        break;
      case '/messages':
        const messageTx: ChatMessageTx = req.body;
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
        response = new HttpResponse({ status: 200, body: {} });
        break
      default:
        if (req.url.startsWith('/messages/conversation/')) {
          const id = req.url.split('/').pop();
          if (id && id in ConversationRxMockData) response = new HttpResponse({ status: 200, body: structuredClone(ConversationRxMockData[id]) });
        } else {
          console.log('[MockApi] unknown url:', req.url);
        }
        break;
    }

    return of(response).pipe(delay(500));
  }
}
