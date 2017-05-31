import { Injectable } from '@angular/core';

@Injectable()
export class DoubleSquareService {
  computeSurface = (side: number) => side * side * 4;
}
