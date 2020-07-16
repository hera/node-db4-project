const express = require("express");
const recipeDb = require("./recipesModel");

const router = express.Router();


// Get all recipes

router.get("/", (req, res) => {
    recipeDb.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(error => {
            res.status(500).json({
                error: "Server error. Could not get all recipes",
                description: error
            });
        });
});


// Get all ingredients for a given recipe id

router.get("/:id/shoppinglist", (req, res) => {
    recipeDb.getShoppingList(req.params.id)
        .then(ingredients => {
            res.status(200).json(ingredients);
        })
        .catch(error => {
            res.status(500).json({
                error: "Server error. Could not get all ingredients for the given recipe.",
                description: error
            });
        });
});


module.exports = router;