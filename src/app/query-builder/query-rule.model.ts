import { Field } from './query-builder.model';

export interface QueryRule {
  field: Field;
  operation: string;
  value: string;
}
