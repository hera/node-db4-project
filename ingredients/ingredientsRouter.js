const express = require("express");
const ingredientDb = require("./ingredientsModel");

const router = express.Router();


// Get all recipes for a given ingredient id

router.get("/:id/recipes", (req, res) => {
    ingredientDb.getRecipesByIngredientId(req.params.id)
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(error => {
            res.status(500).json({
                error: "Server error. Could not get all recipes for the given ingredient.",
                description: error
            });
        });
});

module.exports = router;