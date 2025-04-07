import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StepsIndicatorComponent } from "../../../../components/steps-indicator/steps-indicator.component";
import { StepsHeaderComponent } from "../../../../components/steps-header/steps-header.component";

@Component({
  selector: 'app-a-name-tag',
  imports: [
    RouterLink,
    StepsIndicatorComponent,
    StepsHeaderComponent
],
  templateUrl: './a-name-tag.component.html',
  styleUrl: './a-name-tag.component.css'
})
export class ANameTagComponent {

}
