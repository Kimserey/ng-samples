import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormArray, ValidatorFn } from '@angular/forms';
import { notACarrotValidator } from './name-validator.directive';
import { Observable } from 'rxjs/Observable';

function nameValidator(nameKey: string, descriptionKey: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const fg = control as FormGroup;
    const value = fg.value;
    const name = value.get('name').value;
    const description = value.get('description').value;
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

  constructor(private fb: FormBuilder) {
    const ingredients = ['carrot', 'beans'];
    const ingredientFromGroups = ingredients.map(i => fb.group(this.initializeIngredientForm()));

    this.recipeForm = fb.group({
      profile: [ fb.group({
        name: '',
        description: '',
        timeEstimation: ''
      }),  nameValidator('name', 'description') ],
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
    console.log('Submit ' + JSON.stringify(this.recipeForm.value));
  }
}
