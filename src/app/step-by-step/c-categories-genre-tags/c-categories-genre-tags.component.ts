import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StepsIndicatorComponent } from "../../components/steps-indicator/steps-indicator.component";
import { StepsHeaderComponent } from "../../components/steps-header/steps-header.component";

@Component({
  selector: 'app-c-categories-genre-tags',
  imports: [
    RouterLink,
    StepsIndicatorComponent,
    StepsHeaderComponent
],
  templateUrl: './c-categories-genre-tags.component.html',
  styleUrl: './c-categories-genre-tags.component.css'
})
export class CCategoriesGenreTagsComponent {

}
