import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ComponentsModule } from '../../components/components.module';
import { Geolocation } from '@ionic-native/geolocation';
import { UserProvider } from '../../providers/user/user';
import { SearchPageModule } from '../search/search.module';
import { SkillsProvider } from '../../providers/skills/skills';
// import { SearchPage } from '../search/search';
import { StylistReviewPageModule } from '../stylist-review/stylist-review.module';
import { BookAvailabilityPageModule } from '../book-availability/book-availability.module';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [HomePage],
  imports: [
    ComponentsModule,
    SearchPageModule,
    StylistReviewPageModule,
    BookAvailabilityPageModule,
    IonicPageModule.forChild(HomePage),
    HttpModule,
  ],
  providers: [Geolocation, UserProvider],
})
export class HomePageModule {}
