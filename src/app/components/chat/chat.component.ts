import { Component } from '@angular/core';
import { ConversationSelectorComponent } from "./conversation-selector/conversation-selector.component";
import { ConversationBubbleComponent } from "./conversation-bubble/conversation-bubble.component";
import {ChatService} from '../../shared/api/chat/chat.service';
import {AuthService} from '../../shared/api/auth/auth.service';
import {ProfanityService} from '../../shared/profanity/profanity.service';

@Component({
  selector: 'app-chat',
  imports: [
    ConversationSelectorComponent,
    ConversationBubbleComponent,
  ],
  providers: [
    ChatService,
    AuthService,
    ProfanityService,
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  selectedConversationId?: string;

  onConversationSelected(id: string): void {
    this.selectedConversationId = id;  // Capture the selected ID from the child component
  }
}
