import { Component } from '@angular/core';
import { ChatComponent } from "../../../components/chat/chat.component";

@Component({
  selector: 'app-chats',
  imports: [
      ChatComponent
  ],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.css'
})
export class ChatsComponent {

}
