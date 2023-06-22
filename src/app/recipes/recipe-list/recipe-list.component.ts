import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() selectedRecipeForRecipeComponent = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Masala Chai', 'India\'s favourite masala chai', 
    'https://i.pinimg.com/736x/fc/c8/00/fcc80030fa5fd37d93469e06b3380dd7.jpg'),
    new Recipe('traditional-korean-dish-bibimbap', 'This is traditional-korean-dish-bibimbap', 
    'https://i0.wp.com/picjumbo.com/wp-content/uploads/traditional-korean-dish-bibimbap-with-chopsticks-free-photo.jpg?w=2210&quality=70')
  ];

  // locallySelectedRecipe: Recipe;

  onSelectedRecipe(recipe: Recipe){
    this.selectedRecipeForRecipeComponent.emit(recipe);
  }
}
