import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { ChatMessageRx } from './models/message-rx.model';
import { ChatMessageTx } from './models/message-tx.model';
import { environment } from '../../../../environments/environment';
import { ChatConversationRx, ChatConversationsRx } from './models/conversation-rx.model';

@Injectable()
export class ChatService {

  constructor(private http: HttpClient) { }

  postNewMessage(message: ChatMessageTx): Observable<ChatMessageRx> {
    return this.http.post<ChatMessageRx>(environment.apiUrl + '/messages', message);
  }

  putMessageStatus(messageId: string): Observable<{}> {
    return this.http.put<{}>(environment.apiUrl + `/messages/${messageId}/status?status=READ`, {});
  }

  getConversations() {
    return this.http.get<ChatConversationsRx>(environment.apiUrl + '/messages/conversation');
  }

  getConversation(conversationId: string) {
    return this.http.get<ChatConversationRx>(environment.apiUrl + `/messages/conversation/${conversationId}`);
  }
}
