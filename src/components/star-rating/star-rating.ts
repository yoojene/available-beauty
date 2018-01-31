import { Component, Input, AfterContentInit } from '@angular/core';
/**
 * Generated class for the StarRatingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'star-rating',
  templateUrl: 'star-rating.html'
})
export class StarRatingComponent implements AfterContentInit {
  @Input() rating: any;

  text: string;

  starRating = [];
  remainder: any;

  constructor() {
    console.log('Hello StarRatingComponent Component');
    this.text = 'Hello World';
  }

  ngAfterContentInit() {
    console.log(this.rating);
    this.generateStarList(this.rating);
  }

  generateStarList(rating) {
    let remainder = rating - Math.floor(rating);

    let whole = Math.floor(rating);

    console.log(remainder);

    console.log(whole);

    this.remainder = remainder;

    for (let i = 0; i < whole; i++) {
      this.starRating.push(i);
    }

    console.log(this.starRating);
  }
}
