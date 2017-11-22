import {InjectionToken} from '@angular/core';

export interface ApiConfig {
  endpointURL: string;
  usersPath: string;
  userPath: string;
  stylistsPath: string;
  stylistPath: string;
}

export const API_CONFIG: InjectionToken<ApiConfig> = new InjectionToken<ApiConfig>('api.config');
