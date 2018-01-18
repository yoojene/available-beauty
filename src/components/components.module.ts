import { NgModule } from '@angular/core';

import { MapProvidersModule } from '../providers/maps/map.providers.module';
import { IonMaps } from './ion-maps/ion-maps';
// import { IonStaticMapsComponent } from './ion-static-maps/ion-static-maps';
import { IonMarker } from './ion-marker/ion-marker';
import { ExpandableItemComponent } from './expandable-item/expandable-item';


@NgModule({
	declarations: [
    IonMaps,
    // IonStaticMapsComponent,
    IonMarker,
    ExpandableItemComponent,
  ],
	imports: [
    MapProvidersModule.forRoot(),
  ],
	exports: [
    IonMaps,
    // IonStaticMapsComponent,
    IonMarker,
    ExpandableItemComponent,
  ]
})
export class ComponentsModule {}
