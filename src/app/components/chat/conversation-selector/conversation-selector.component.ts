import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../../../shared/api/chat/chat.service';
import { ChatConversationsRx } from '../../../shared/api/chat/models/conversation-rx.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conversation-selector',
  imports: [CommonModule],
  providers: [ChatService],
  templateUrl: './conversation-selector.component.html',
  styleUrl: './conversation-selector.component.css'
})
export class ConversationSelectorComponent {
  @Output() selectedConversationId = new EventEmitter<string>(); // Use a type based on your data

  conversations$!: Observable<ChatConversationsRx>;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    // Call the service method to get conversations
    this.conversations$ = this.chatService.getConversations();
  }
}
