import { GoogleLoginProvider, FacebookLoginProvider, AuthServiceConfig } from "angular4-social-login";
import { InjectionToken } from "@angular/core";

export const SOCIAL_LOGIN_CONFIG: InjectionToken<AuthServiceConfig> = new InjectionToken<AuthServiceConfig>('social.login.config')
