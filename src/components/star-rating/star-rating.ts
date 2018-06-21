import { Component, Input, AfterContentInit, ElementRef } from '@angular/core';
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
  @Input() public rating: any;

  text: string;

  // Show Star Rating
  public starRating = [];
  public remainder: any;

  // Add Star Rating
  public initialRating = [
    {
      selected: false,
      number: 1,
    },
    {
      selected: false,
      number: 2,
    },
    {
      selected: false,
      number: 3,
    },
    {
      selected: false,
      number: 4,
    },
    {
      selected: false,
      number: 5,
    },
  ];

  constructor(private elementRef: ElementRef) {
    console.log('startRating Component loaded');
  }

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

  public toggleStar(index: number, rate: any) {
    this.initialRating.forEach(el => {
      if (rate.number >= el.number) {
        el.selected = !rate.selected;
      }
    });
    // TODO: Need to toggle any earlier stars if for example 3rd is chosen.
    // 1 and 2 automatically need updating
  }
}
