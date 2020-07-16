const db = require("../data/dbConfig");

module.exports = {
    getRecipes,
    getShoppingList
};


// Return all recipes

function getRecipes () {
    return db("Recipe");
}


// Return all ingredients for a given recipe id

function getShoppingList (recipeId) {
    return db("RecipeIngredient")
        .select("RecipeIngredient.Quantity", "Ingredient.Name")
        .join("Ingredient", "RecipeIngredient.IngredientId", "=", "Ingredient.Id")
        .where("RecipeIngredient.RecipeId", recipeId);
}
