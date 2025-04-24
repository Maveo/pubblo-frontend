import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationBubbleComponent } from './conversation-bubble.component';
import { ChatService } from '../../../shared/api/chat/chat.service';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from '../../../shared/api/auth/auth.service';
import { ProfanityService } from '../../../shared/profanity/profanity.service';

describe('ConversationBubbleComponent', () => {
  let component: ConversationBubbleComponent;
  let fixture: ComponentFixture<ConversationBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversationBubbleComponent],
      providers: [
        AuthService,
        ChatService,
        ProfanityService,
        provideHttpClient(),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversationBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
