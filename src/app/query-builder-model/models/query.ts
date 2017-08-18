import { And, Or } from './condition';
import { Rule } from './rule';

export type Query =
| And
| Or
| Rule;
