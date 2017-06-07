import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: 'simple-form.component.html',
})
export class SimpleFormComponent {
  recipeForm: FormGroup;

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    const ingredients = [ 'carrot', 'beans' ];
    const ingredientFromGroups = ingredients.map(i => fb.group({ ingredientName: i }));

    this.recipeForm = fb.group({
      profile: fb.group({
        name: ['', Validators.required ],
        timeEstimation: ''
      }),
      ingredients: fb.array(ingredientFromGroups)
    });
  }

  addIngredient() {
    this.ingredients.push(this.fb.group({
      ingredientName: ''
    }));
  }

  removeIngredientAtIndex(index) {
    this.ingredients.removeAt(index);
  }
}
