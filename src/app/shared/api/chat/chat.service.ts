import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatMessageRx } from './models/message-rx.model';
import { ChatMessageTx } from './models/message-tx.model';
import { environment } from '../../../../environments/environment';
import { ChatConversationRx, ChatConversationsRx } from './models/conversation-rx.model';
import { BadWordsRx } from './models/bad-words-rx.model';

@Injectable()
export class ChatService {

  constructor(private http: HttpClient) {
    console.log('chat service created');
  }

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

  getBadWords(): Observable<BadWordsRx> {
    return this.http.get<BadWordsRx>(environment.apiUrl + '/bad-words');
  }
}
