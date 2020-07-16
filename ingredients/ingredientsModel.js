const db = require("../data/dbConfig");

module.exports = {
    getRecipesByIngredientId
}

function getRecipesByIngredientId (IngredientId) {
    return db("RecipeIngredient")
        .select("Recipe.Id", "Recipe.Name")
        .join("Recipe", "RecipeIngredient.RecipeId", "=", "Recipe.Id")
        .where("RecipeIngredient.IngredientId", IngredientId);
}