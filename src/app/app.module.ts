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

import { APP_REDUCER } from '../model/app.reducer';

import { Facebook } from '@ionic-native/facebook';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { ImagePicker } from '@ionic-native/image-picker';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../model/auth/auth.effects';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { ComponentsModule } from '../components/components.module';
import { GoogleMaps } from '@ionic-native/google-maps';
import { UserProvider } from '../providers/user/user';

import { Firebase } from '@ionic-native/firebase';

import { API_CONFIG_VALUES } from '../config/api.config';
import { FIREBASE_CONFIG_VALUES } from '../config/firebase.config';
import { API_CONFIG } from '../model/api.config';

import { StylistProvider } from '../providers/stylist/stylist';
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
    HomePageModule,
    LoginBackgroundSliderPageModule,
    LandingPageModule,
    LoginPageModule,
    TabsPageModule,
    RegisterPageModule,
    ComponentsModule,
    StoreModule.forRoot(APP_REDUCER),
    // Note that you must instrument after importing StoreModule
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),

    EffectsModule.forRoot([AuthEffects]),
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
    StylistProvider,
    LocationProvider,
    StorageProvider,
    SearchProvider,
    AvailabilityProvider,
    UtilsProvider,
    UtilsProvider,
    BookingProvider,
    PhotoProvider,
    MessagesProvider,
    Firebase,
    FcmProvider,
  ],
})
export class AppModule {}
