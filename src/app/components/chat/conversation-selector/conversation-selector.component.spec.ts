import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationSelectorComponent } from './conversation-selector.component';
import { ChatService } from '../../../shared/api/chat/chat.service';
import { provideHttpClient } from '@angular/common/http';

describe('ConversationSelectorComponent', () => {
  let component: ConversationSelectorComponent;
  let fixture: ComponentFixture<ConversationSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversationSelectorComponent],
      providers: [
        ChatService,
        provideHttpClient(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversationSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
