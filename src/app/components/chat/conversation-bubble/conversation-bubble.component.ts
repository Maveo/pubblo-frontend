import { Component, Input, SimpleChanges } from '@angular/core';
import { ChatService } from '../../../shared/api/chat/chat.service';
import { CommonModule } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { ChatConversationRx } from '../../../shared/api/chat/models/conversation-rx.model';
import { AuthService } from '../../../shared/api/auth/auth.service';
import { AuthMeRx } from '../../../shared/api/auth/models/me-rx.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-conversation-bubble',
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    ChatService,
    AuthService,
  ],
  templateUrl: './conversation-bubble.component.html',
  styleUrl: './conversation-bubble.component.css'
})
export class ConversationBubbleComponent {
  @Input() selectedId!: string; // Receive the selected ID from the parent

  conversation$!: Observable<ChatConversationRx>;
  meAuth!: AuthMeRx;

  messageForm = new FormGroup({
    message: new FormControl('', { nonNullable: true })
  });


  constructor(
    private chatService: ChatService,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.messageForm.reset();
    // Call the service once during initialization (setup)
    this.loadConversation();
    this.meAuth = this.authService.getAuthLocalStorage()!;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // If the selectedId changes, call the service again
    this.loadConversation();
  }

  sendMessage(): void {
    if (this.messageForm.invalid) return;
    this.chatService.postNewMessage({
      senderId: this.meAuth.id,
      receiverId: this.selectedId,
      content: this.messageForm.value.message!,
      status: 'SENT',
    }).subscribe(() => this.loadConversation());
    this.messageForm.reset();
  }

  // Method to load the conversation
  private loadConversation(): void {
    this.conversation$ = this.chatService.getConversation(this.selectedId);
  }
}
