import { Component, Input, AfterContentInit } from '@angular/core';
/**
 * Generated class for the StarRatingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'star-rating',
  templateUrl: 'star-rating.html',
})
export class StarRatingComponent implements AfterContentInit {
  @Input() rating: any;

  text: string;

  starRating = [];
  remainder: any;

  constructor() {}

  ngAfterContentInit() {
    this.generateStarList(this.rating);
  }

  generateStarList(rating) {
    let remainder = rating - Math.floor(rating);

    let whole = Math.floor(rating);

    this.remainder = remainder;

    for (let i = 0; i < whole; i++) {
      this.starRating.push(i);
    }
  }
}
