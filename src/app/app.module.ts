import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AvailableBeautyApp } from './app.component';

import { HomePageModule } from '../pages/home/home.module';
import { LoginBackgroundSliderPageModule } from '../pages/login-background-slider/login-background-slider.module';
import { LoginPageModule } from '../pages/login/login.module';
import { LandingPageModule } from '../pages/landing/landing.module';

import { Facebook } from '@ionic-native/facebook';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { ImagePicker } from '@ionic-native/image-picker';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { TabsPageModule } from '../pages/tabs/tabs.module';
import { ComponentsModule } from '../components/components.module';
import { GoogleMaps } from '@ionic-native/google-maps';
import { UserProvider } from '../providers/user/user';

import { FCM } from '@ionic-native/fcm';

import { API_CONFIG_VALUES } from '../config/api.config';
import { FIREBASE_CONFIG_VALUES } from '../config/firebase.config';
import { API_CONFIG } from '../model/api.config';

import { LocationProvider } from '../providers/location/location';
import { RegisterPageModule } from '../pages/register/register.module';
import { StorageProvider } from '../providers/storage/storage';
import { SearchProvider } from '../providers/search/search';

import { ReactiveFormsModule } from '@angular/forms';
import { AvailabilityProvider } from '../providers/availability/availability';
import { UtilsProvider } from '../providers/utils/utils';
import { BookingProvider } from '../providers/booking/booking';
import { PhotoProvider } from '../providers/photo/photo';
import { MessagesProvider } from '../providers/messages/messages';
import { FcmProvider } from '../providers/fcm/fcm';
import { SkillsProvider } from '../providers/skills/skills';
import { FindAvailabilityPageModule } from '../pages/find-availability/find-availability.module';

@NgModule({
  declarations: [
    AvailableBeautyApp,
    // TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(AvailableBeautyApp, {
      backButtonText: '',
    }),
    IonicStorageModule.forRoot(),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG_VALUES),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    HomePageModule,
    LoginBackgroundSliderPageModule,
    LandingPageModule,
    LoginPageModule,
    TabsPageModule,
    RegisterPageModule,
    FindAvailabilityPageModule,
    ComponentsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [AvailableBeautyApp],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    Geolocation,
    File,
    Camera,
    ImagePicker,
    NativeGeocoder,
    GoogleMaps,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserProvider,
    {
      provide: API_CONFIG,
      useValue: API_CONFIG_VALUES,
    },
    LocationProvider,
    StorageProvider,
    SearchProvider,
    AvailabilityProvider,
    UtilsProvider,
    UtilsProvider,
    BookingProvider,
    PhotoProvider,
    MessagesProvider,
    FCM,
    FcmProvider,
    SkillsProvider,
  ],
})
export class AppModule {}
