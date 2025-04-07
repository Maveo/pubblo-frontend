import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StepsIndicatorComponent } from "../../../../components/steps-indicator/steps-indicator.component";
import { StepsHeaderComponent } from "../../../../components/steps-header/steps-header.component";

@Component({
  selector: 'app-b-short-pitch',
  imports: [
    RouterLink,
    StepsIndicatorComponent,
    StepsHeaderComponent
],
  templateUrl: './b-short-pitch.component.html',
  styleUrl: './b-short-pitch.component.css'
})
export class BShortPitchComponent {

}
