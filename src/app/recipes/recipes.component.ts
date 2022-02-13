import { RecipeService } from './recipe.service';
import { Recipe } from './models/recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  selectedRecipe!: Recipe;
  constructor(private RecipeService: RecipeService) {}

  ngOnInit(): void {}
}
