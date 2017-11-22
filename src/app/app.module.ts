import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HomePageModule } from '../pages/home/home.module';
import { LoginBackgroundSliderPageModule } from '../pages/login-background-slider/login-background-slider.module';
import { LoginPageModule } from '../pages/login/login.module';
import { LandingPageModule } from '../pages/landing/landing.module';

import { APP_REDUCER } from '../model/app.reducer';

import { Facebook } from '@ionic-native/facebook';
import { Geolocation } from '@ionic-native/geolocation';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../model/auth/auth.effects';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { ComponentsModule } from '../components/components.module';
import { GoogleMaps } from '@ionic-native/google-maps';
import { UserProvider } from '../providers/user/user';

import { API_CONFIG_VALUES } from '../config/api.config';
import { API_CONFIG } from '../model/api.config';

@NgModule({
  declarations: [
    MyApp
    // TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    HomePageModule,
    LoginBackgroundSliderPageModule,
    LandingPageModule,
    LoginPageModule,
    TabsPageModule,
    ComponentsModule,
    StoreModule.forRoot(APP_REDUCER),
    // Note that you must instrument after importing StoreModule
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),

    EffectsModule.forRoot([AuthEffects])
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    Geolocation,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    {
      provide: API_CONFIG,
      useValue: API_CONFIG_VALUES
    }
  ]
})
export class AppModule {}
