const express = require("express");
const recipeDb = require("./recipesModel");

const router = express.Router();

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

module.exports = router;