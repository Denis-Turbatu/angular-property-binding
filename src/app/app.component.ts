import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FoodGalleryComponent } from './food-gallery/food-gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FoodGalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-property-binding';
}
