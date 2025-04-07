import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StepsIndicatorComponent } from "../../../../components/steps-indicator/steps-indicator.component";
import { StepsHeaderComponent } from "../../../../components/steps-header/steps-header.component";

@Component({
  selector: 'app-d-visuals',
  imports: [
    RouterLink,
    StepsIndicatorComponent,
    StepsHeaderComponent
],
  templateUrl: './d-visuals.component.html',
  styleUrl: './d-visuals.component.css'
})
export class DVisualsComponent {

}
