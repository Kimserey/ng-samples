import { Query } from './query';

export interface Group {
  condition: string;
  queries: Query[];
}
