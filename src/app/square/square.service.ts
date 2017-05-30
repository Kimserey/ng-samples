import { Injectable } from '@angular/core';

@Injectable()
export class SquareService {
  computeSurface = (side: number) => side * side;
}
