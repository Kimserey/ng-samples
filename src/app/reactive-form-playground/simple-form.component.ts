import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormArray, ValidatorFn } from '@angular/forms';
import { Http } from '@angular/http';
import { notACarrotValidator } from './name-validator.directive';
import { Observable } from 'rxjs/Observable';

function nameValidator(nameKey: string, descriptionKey: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const fg = control as FormGroup;
    const name = fg.get('name').value;
    const description = fg.get('description').value;
    return name.length > description.length ? { 'descriptionTooSmall': {name, description}} : null;
  };
}

@Component({
  selector: 'app-simple-form',
  templateUrl: 'simple-form.component.html',
})
export class SimpleFormComponent {
  recipeForm: FormGroup;
  toggle$: Observable<boolean>;

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  get profile(): FormGroup {
    return this.recipeForm.get('profile') as FormGroup;
  }

  constructor(private fb: FormBuilder, private http: Http) {
    const ingredients = ['carrot', 'beans'];
    const ingredientFromGroups = ingredients.map(i => fb.group(this.initializeIngredientForm()));

    this.recipeForm = fb.group({
      profile: fb.group({
        name: '',
        description: '',
        timeEstimation: ''
      }, {
        validator: nameValidator('name', 'description')
      }),
      ingredients: fb.array(ingredientFromGroups)
    });
  }

  initializeIngredientForm() {
    return {
      ingredientDescription: this.fb.group({
        name: '',
        quantity: '',
      }),
      description: ''
    }
  }

  addIngredient() {
    this.ingredients.push(this.fb.group(this.initializeIngredientForm()));
  }

  removeIngredientAtIndex(index) {
    this.ingredients.removeAt(index);
  }

  save() {
    this.http
      .get('http://localhost:5000/something')
      .subscribe(x => console.log(JSON.stringify(x.json())));
    console.log('Submit ' + JSON.stringify(this.recipeForm.value));
  }
}
