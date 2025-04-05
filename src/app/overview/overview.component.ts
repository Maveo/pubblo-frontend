import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChatComponent } from "../components/chat/chat.component";

@Component({
  selector: 'app-overview',
  imports: [
    RouterLink,
    ChatComponent
],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

}
