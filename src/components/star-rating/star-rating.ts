import {
  Component,
  Input,
  AfterContentInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: 'star-rating.html',
})
export class StarRatingComponent implements AfterContentInit {
  @Input()
  public rating: any;
  @Output()
  public chosenRating = new EventEmitter();

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

  constructor() {
    console.log('startRating Component loaded');
  }

  public ngAfterContentInit() {
    this.generateStarList(this.rating);
  }

  public generateStarList(rating) {
    const remainder = rating - Math.floor(rating);
    const whole = Math.floor(rating);
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

    const total = { total: 0 };
    let calcRating;

    this.initialRating.filter(el => {
      if (el.selected === true) {
        total.total += 1;
        calcRating = { ...total, ...el };
      }

      return calcRating;
    });

    this.chosenRating.emit(calcRating);

    // TODO: Need to toggle any earlier stars if for example 3rd is chosen.
    // 1 and 2 automatically need updating
    // This sort of works, unless you go RTL
  }
}
