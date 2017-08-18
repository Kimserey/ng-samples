import { Query } from './query';

export interface Condition {
  condition: string;
  queries: Query[];
}

export class And implements Condition {
  condition = 'AND';

  constructor(public queries: Query[]) { }
}

export class Or implements Condition {
  condition = 'OR';

  constructor(public queries: Query[]) { }
}
