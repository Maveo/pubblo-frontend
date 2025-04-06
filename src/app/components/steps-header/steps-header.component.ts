import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-steps-header',
  imports: [],
  templateUrl: './steps-header.component.html',
  styleUrl: './steps-header.component.css'
})
export class StepsHeaderComponent {
  @Input() titleText!: string;
  @Input() subtitleText!: string;
}
