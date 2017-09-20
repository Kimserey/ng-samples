import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormArray, ValidatorFn } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-complex-form'
})
export class ComplexComponent {
  constructor(private fb: FormBuilder) {
  }
}
