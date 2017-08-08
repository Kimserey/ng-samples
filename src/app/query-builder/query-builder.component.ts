import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-query-builder',
  templateUrl: 'query-builder.component.html',
})
export class QueryBuilderComponent implements OnInit {
  form: FormGroup;

  get conditions(): FormArray {
    return this.form.get('conditions') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      conditions: this.fb.array([
        this.fb.group({
          property: ['test1'],
        }),
        this.fb.group({
          property: ['test2'],
        }),
        this.fb.group({
          property: ['test2'],
        }),
      ]),
    });
  }

  addRule() {
    this.conditions.push(
      this.fb.group({
        property: ['']
      }),
    );
  }
}
