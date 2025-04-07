import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { ChatService } from '../../../shared/api/chat/chat.service';
import { CommonModule } from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { ChatConversationRx } from '../../../shared/api/chat/models/conversation-rx.model';
import { AuthService } from '../../../shared/api/auth/auth.service';
import { AuthMeRx } from '../../../shared/api/auth/models/me-rx.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfanityService } from '../../../shared/profanity/profanity.service';

@Component({
  selector: 'app-conversation-bubble',
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  templateUrl: './conversation-bubble.component.html',
  styleUrl: './conversation-bubble.component.css'
})
export class ConversationBubbleComponent {
  @Input() selectedId!: string; // Receive the selected ID from the parent

  @ViewChild('messagesContainer') private messagesContainer?: ElementRef;

  conversation$!: Observable<ChatConversationRx>;
  meAuth!: AuthMeRx;

  sendingMessage = false;

  messageForm = new FormGroup({
    message: new FormControl('', { nonNullable: true })
  });

  constructor(
    private chatService: ChatService,
    private authService: AuthService,
    private profanityService: ProfanityService,
  ) {
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    if (this.messagesContainer) this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
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

    // Get the message content
    const messageContent = this.messageForm.value.message!;

    // If no profanity, proceed to send the message
    this.sendingMessage = true;
    this.profanityService.containsProfanity(messageContent).pipe(
      switchMap(isProfane => {
        if (isProfane) {
          this.sendingMessage = false;
          // Handle profanity detection, e.g., show a warning to the user
          alert('Your message contains inappropriate language and cannot be sent.');
          throw new Error('Your message contains inappropriate language and cannot be sent.');
        }

        // Reset the message form after sending
        this.messageForm.reset();

        return this.chatService.postNewMessage({
          senderId: this.meAuth.id,
          receiverId: this.selectedId,
          content: messageContent,
          status: 'SENT',
        });

      })
    ).subscribe(() => {
      this.sendingMessage = false;
      this.loadConversation();
    });
  }

  // Method to load the conversation
  private loadConversation(): void {
    this.conversation$ = this.chatService.getConversation(this.selectedId);
  }
}
