import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsComponent } from './chats.component';
import { provideHttpClient } from '@angular/common/http';
import { ChatService } from '../../../shared/api/chat/chat.service';

describe('ChatsComponent', () => {
  let component: ChatsComponent;
  let fixture: ComponentFixture<ChatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ChatsComponent,
      ],
      providers: [
        ChatService,
        provideHttpClient(),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
