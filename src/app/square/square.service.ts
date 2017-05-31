import { Injectable } from '@angular/core';

import { Logger } from '../logger.service';

@Injectable()
export class SquareService {
  constructor(private logger: Logger) { }

  computeSurface = (side: number) => side * side;
}

export const squareServiceFactory = (logger: Logger) => {
  logger.log('factory called');
  return new SquareService(logger);
};
