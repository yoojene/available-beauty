import {
  Component,
  ContentChildren,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
} from '@angular/core';

import { IonMarker } from '../ion-marker/ion-marker';
import { NativeGoogleMapsProvider } from '../../providers/maps/native-google-maps/native-google-maps';

@Component({
  selector: 'ion-maps',
  template: `
    <div #map [style.height]="height" [style.width]="width"></div>
    <ng-content></ng-content>
  `,
})
export class IonMaps {
  /**
   * The latitude position of the map.
   */
  @Input()
  public lat: number;

  /**
   * The longitude position of the map.
   */
  @Input()
  public lng: number;

  /**
   * The height of the map. Default value is '100%'.
   */
  @Input()
  public height: string = '100%';

  /**
   * The width of the map. Default value is '100%'.
   */
  @Input()
  public width: string = '100%';

  /**
   * The zoom of the map. Default value is 16.
   */
  @Input()
  public zoom: number = 15;

  /**
   * The tilt of the map.
   */
  @Input()
  public tilt: number;

  /**
   * Show your current position with a custom marker. Default value is false;
   */
  @Input()
  public showGeolocation: boolean;

  /**
   * The style of the map.
   */
  @Input()
  public mapStyle: string | any[];

  @ViewChild('map')
  public element: ElementRef;
  @ContentChildren(IonMarker)
  public markers: QueryList<IonMarker>;

  public ngAfterContentInit() {
    // After content is rendered, load markers, if any
    const markers = this.markers.toArray();

    // Then, generate the map itself
    this.mapsCtrl.create(this, markers);
  }

  constructor(public mapsCtrl: NativeGoogleMapsProvider) {}

  public centerToGeolocation() {
    return this.mapsCtrl.centerToGeolocation();
  }
}
