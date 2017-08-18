export interface Rule {
  field: string;
  operator: string;
  value: string;
}

export interface Condition {
  condition: string;
}

export class And implements Condition {
  condition = 'AND';

  constructor(public queries: Query[]) { }
}

export class Or implements Condition {
  condition = 'OR';

  constructor(public queries: Query[]) { }
}

export type Query =
  | And
  | Or
  | Rule;
