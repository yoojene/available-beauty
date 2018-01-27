import { NgModule } from '@angular/core';

import { MapProvidersModule } from '../providers/maps/map.providers.module';
import { IonMaps } from './ion-maps/ion-maps';
// import { IonStaticMapsComponent } from './ion-static-maps/ion-static-maps';
import { IonMarker } from './ion-marker/ion-marker';
import { ExpandableItemComponent } from './expandable-item/expandable-item';
import { ProgressBarComponent } from './progress-bar/progress-bar';

@NgModule({
  declarations: [
    IonMaps,
    // IonStaticMapsComponent,
    IonMarker,
    ExpandableItemComponent,
    ProgressBarComponent
  ],
  imports: [MapProvidersModule.forRoot()],
  exports: [
    IonMaps,
    // IonStaticMapsComponent,
    IonMarker,
    ExpandableItemComponent,
    ProgressBarComponent
  ]
})
export class ComponentsModule {}
