import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-steps-indicator',
  imports: [],
  templateUrl: './steps-indicator.component.html',
  styleUrl: './steps-indicator.component.css'
})
export class StepsIndicatorComponent {
  @Input() currentStep!: number; // Receive the current step number
  @Input() maxSteps!: number; // Receive the max number of steps
}
