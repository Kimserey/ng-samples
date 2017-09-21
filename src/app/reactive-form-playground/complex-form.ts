import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormArray, ValidatorFn } from '@angular/forms';
import { Http } from '@angular/http';

interface Model {
  name: string;
  color: string;
  validity: Date;
  range: number[];
  sections: {
    sectionName: string;
    keywords: { keyword: string };
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
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Sections</label>
          <div class="col-sm-9" formArrayName="sections">
            <div class="row mb-2" *ngFor="let section of sections.controls; index as i;" [formGroupName]="i">
              <div class="col-sm-9">
                <input id="{{ 'sectionName-' + i }}" type="text" class="form-control" formControlName="sectionName" placeholder="Enter section name" />
              </div>
              <div class="col-sm-3">
                <button class="btn btn-danger" (click)="removeSection(i)">Remove this section</button>
              </div>
              <div class="col-12 p-3" formArrayName="keywords">
                <div class="m-2">
                  <div class="row mb-2" *ngFor="let keyword of getKeywords(i).controls; index as j" [formGroupName]="j">
                    <div class="col-sm-9">
                      <input id="{{ 'keyword-' + i + '-' + j }}" type="text" class="form-control" formControlName="keyword" placeholder="Enter section name" />
                    </div>
                    <div class="col-sm-3">
                      <button class="btn btn-danger" (click)="removeSectionKeyword(i, j)">Remove this keyword</button>
                    </div>
                  </div>
                  <button class="btn btn-primary" (click)="addSectionKeyword(i)">Add a keyword</button>
                </div>
              </div>
            </div>
            <button class="btn btn-primary" (click)="addSection()">Add a section</button>
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

  get sections() {
    return this.form.get('sections') as FormArray;
  }

  getKeywords(sectionIndex) {
    return this.sections.controls[sectionIndex].get('keywords') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

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
      choice: [this.choices[0].value],
      sections: this.fb.array([
        this.fb.group({
          sectionName: [''],
          keywords: this.fb.array([])
        })
      ])
    });
  }

  addSection() {
    this.sections.push(this.fb.group({
        sectionName: [''],
        keywords: this.fb.array([])
      })
    );
  }

  removeSection(i) {
    this.sections.removeAt(i);
  }

  addSectionKeyword(sectionIndex) {
    this.getKeywords(sectionIndex).push(this.fb.group({
        keyword: ['']
      })
    );
  }

  removeSectionKeyword(sectionIndex, keywordIndex) {
    this.getKeywords(sectionIndex).removeAt(keywordIndex);
  }
}
