import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationBubbleComponent } from './conversation-bubble.component';

describe('ConversationBubbleComponent', () => {
  let component: ConversationBubbleComponent;
  let fixture: ComponentFixture<ConversationBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversationBubbleComponent]
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
