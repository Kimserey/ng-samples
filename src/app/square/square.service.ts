import { Injectable } from '@angular/core';
import { Logger } from '../logger.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SquareService {
  private test = new Subject<string>();
  test$ = this.test.asObservable();

  constructor(private logger: Logger) { }

  computeSurface = (side: number) => side * side;

  setTest(value) {
    this.test.next(value);
    this.test.complete();
  }
}

export function squareServiceFactory (logger: Logger){
  logger.log('factory called');
  return new SquareService(logger);
};
