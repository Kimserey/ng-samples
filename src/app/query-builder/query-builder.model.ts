export const TEXT_FIELD_TYPE = 'Text Field';
export const CHECKBOX_FIELD_TYPE = 'Checkbox Field';
export const NUMBER_FIELD_TYPE = 'Number Field';
export const SELECTION_FIELD_TYPE = 'Selection Field';

export interface TextField {
  label: string;
  type: string;
}

export interface CheckboxField {
  label: string;
  type: string;
}

export interface NumberField {
  label: string;
  type: string;
}

export interface SelectionField {
  label: string;
  entity: string;
  type: string;
}

export type Field =
  TextField
  | NumberField
  | CheckboxField
  | SelectionField;
