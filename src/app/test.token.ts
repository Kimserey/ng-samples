import { InjectionToken } from '@angular/core';
import { Test } from './test.model';

export let TEST = new InjectionToken<Test>('Test');
