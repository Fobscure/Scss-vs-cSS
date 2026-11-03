import { Component } from '@angular/core';

@Component({
  selector: 'app-page1-css',
  imports: [],
  templateUrl: './page1-css.html',
  styleUrl: './page1-css.css',
})
export class Page1Css {
  isFadingOut = false;

  fadeOutButton(): void {
    this.isFadingOut = true;
  }
}
