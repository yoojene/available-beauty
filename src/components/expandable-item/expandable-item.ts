import {
  Component,
  ViewChild,
  Input,
  ElementRef,
  Renderer,
} from '@angular/core';
// import { Renderer } from '@angular/core/src/render/api';

/**
 * Generated class for the ExpandableItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'expandable-item',
  templateUrl: 'expandable-item.html',
})
export class ExpandableItemComponent {
  @ViewChild('expandWrapper', { read: ElementRef })
  public expandWrapper;
  @Input('expanded')
  public expanded;
  @Input('expandHeight')
  public expandHeight;

  // text: string;

  constructor(public renderer: Renderer) {
    console.log('Hello ExpandableItemComponent Component');
    // this.text = 'Hello World';
  }

  public ngAfterViewInit() {
    this.renderer.setElementStyle(
      this.expandWrapper.nativeElement,
      'height',
      `${this.expandHeight}px`
    );
  }
}
