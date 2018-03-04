import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapProvidersModule } from '../providers/maps/map.providers.module';
import { IonMaps } from './ion-maps/ion-maps';
// import { IonStaticMapsComponent } from './ion-static-maps/ion-static-maps';
import { IonMarker } from './ion-marker/ion-marker';
import { ExpandableItemComponent } from './expandable-item/expandable-item';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { StarRatingComponent } from './star-rating/star-rating';
// import { FavouriteIndicatorComponent } from './favourite-indicator/favourite-indicator';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble';

@NgModule({
  declarations: [
    IonMaps,
    // IonStaticMapsComponent,
    IonMarker,
    ExpandableItemComponent,
    ProgressBarComponent,
    StarRatingComponent,
    // FavouriteIndicatorComponent,
    ChatBubbleComponent,
  ],
  imports: [MapProvidersModule.forRoot(), CommonModule],
  exports: [
    IonMaps,
    // IonStaticMapsComponent,
    IonMarker,
    ExpandableItemComponent,
    ProgressBarComponent,
    StarRatingComponent,
    // FavouriteIndicatorComponent,
    ChatBubbleComponent,
  ],
  entryComponents: [StarRatingComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
