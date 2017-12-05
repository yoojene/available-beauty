import { GoogleLoginProvider, FacebookLoginProvider, AuthServiceConfig } from 'angular4-social-login';

export const SOCIAL_LOGIN_CONFIG_VALUES = new AuthServiceConfig([
   {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('625369331469-oqvj72hnm3g1mgg3v2cbs50f73u0fd5f.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('125684678101312')
  }
]);
