import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormArray, ValidatorFn } from '@angular/forms';
import { Http } from '@angular/http';

interface Model {
  name: string;
  color: string;
  validity: Date;
  range: number[];
  sections: {
    name: string;
    keywords: string[];
  }[];
}

@Component({
  template: `
    <div class="p-3">
      <form [formGroup]="form">
        <div class="form-group row">
          <label for="name" class="col-sm-3 col-form-label">Name</label>
          <div class="col-sm-9">
            <input id="name" type="text" class="form-control" formControlName="name" placeholder="Enter name" />
          </div>
        </div>
        <div class="form-group row">
          <label for="color" class="col-sm-3 col-form-label">Color</label>
          <div class="col-sm-9">
            <p-colorPicker formControlName="color"></p-colorPicker>
          </div>
        </div>
        <div class="form-group row">
          <label for="date" class="col-sm-3 col-form-label">Date</label>
          <div class="col-sm-9">
            <p-calendar formControlName="validity" dateFormat="D d, M yy"></p-calendar>
          </div>
        </div>
        <div class="form-group row">
          <label for="range" class="col-sm-3 col-form-label">Range</label>
          <div class="col-sm-9">
            <p-slider formControlName="range" [range]="true" [min]="0" [max]="1000"></p-slider>
          </div>
        </div>
        <div class="form-group row">
          <label for="choice" class="col-sm-3 col-form-label">Choice</label>
          <div class="col-sm-9">
            <p-dropdown [options]="choices" formControlName="choice"></p-dropdown>
          </div>
        </div>
      </form>
    </div>
    <pre>{{form.value|json}}</pre>
  `
})
export class ComplexComponent implements OnInit {
  form: FormGroup;
  choices: {label: string, value: string}[];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.choices = [
      { label: 'test 1', value: 'test-1' },
      { label: 'test 2', value: 'test-2' },
      { label: 'test 3', value: 'test-3' },
      { label: 'test 4', value: 'test-4' }
    ];

    this.form = this.fb.group({
      name: [''],
      color: [''],
      validity: [new Date()],
      range: [[0, 100]],
      choice: [this.choices[0].value]
    });
  }
}
