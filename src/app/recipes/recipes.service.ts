import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Hcf',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Mmm..._elicoidali_pasta_%2813257080663%29.jpg/255px-Mmm..._elicoidali_pasta_%2813257080663%29.jpg',
      ingredients: ['beef', 'mikl'],
    },
    {
      id: 'r2',
      title: 'Helen',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Mmm..._elicoidali_pasta_%2813257080663%29.jpg/255px-Mmm..._elicoidali_pasta_%2813257080663%29.jpg',
      ingredients: ['beef', 'mikl'],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === recipeId;
      }),
    };
  }
}
