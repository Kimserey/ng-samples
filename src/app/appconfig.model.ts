import { InjectionToken } from '@angular/core';

export interface AppConfig {
  Test: string;
}

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');
