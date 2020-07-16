const db = require("../data/dbConfig");

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};


// Return all recipes

function getRecipes () {
    return db("Recipe");
}


// Return all ingredients for a given recipe id

function getShoppingList (RecipeId) {
    return db("RecipeIngredient")
        .select("RecipeIngredient.Quantity", "Ingredient.Name")
        .join("Ingredient", "RecipeIngredient.IngredientId", "=", "Ingredient.Id")
        .where("RecipeIngredient.RecipeId", RecipeId);
}


// Get all instructions for a given recipe id
// Returns an array of strings

function getInstructions (RecipeId) {
    return db("Instruction")
        .select("Instruction.Content")
        .where({RecipeId})
        .orderBy("Instruction.Id", "asc")
        .then(instructions => {
            return instructions.map(item => item["Content"]);
        });
}