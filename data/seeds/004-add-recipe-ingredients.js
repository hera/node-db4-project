
exports.seed = function(knex) {
    return knex('RecipeIngredient').truncate()
        .then(function () {
            return knex('RecipeIngredient').insert([
                {
                    RecipeId: 1,
                    IngredientId: 1,
                    Quantity: 3
                },
                {
                    RecipeId: 1,
                    IngredientId: 2,
                    Quantity: 3.5
                },
                {
                    RecipeId: 1,
                    IngredientId: 3,
                    Quantity: 2.25
                },
                {
                    RecipeId: 1,
                    IngredientId: 5,
                    Quantity: 1
                },
                {
                    RecipeId: 1,
                    IngredientId: 4,
                    Quantity: 1.5
                },
                {
                    RecipeId: 1,
                    IngredientId: 6,
                    Quantity: 10
                },

                // --------------------------------------------------

                {
                    RecipeId: 2,
                    IngredientId: 4,
                    Quantity: 8
                },
                {
                    RecipeId: 2,
                    IngredientId: 5,
                    Quantity: 4.5
                },
                {
                    RecipeId: 2,
                    IngredientId: 6,
                    Quantity: 2.25
                },
                {
                    RecipeId: 2,
                    IngredientId: 3,
                    Quantity: 1
                },
                {
                    RecipeId: 2,
                    IngredientId: 1,
                    Quantity: 2.5
                },
                {
                    RecipeId: 2,
                    IngredientId: 2,
                    Quantity: 10
                },

                // --------------------------------------------------

                {
                    RecipeId: 3,
                    IngredientId: 6,
                    Quantity: 8
                },
                {
                    RecipeId: 3,
                    IngredientId: 2,
                    Quantity: 3.5
                },
                {
                    RecipeId: 3,
                    IngredientId: 3,
                    Quantity: 2.25
                },
                {
                    RecipeId: 3,
                    IngredientId: 5,
                    Quantity: 1
                },
                {
                    RecipeId: 3,
                    IngredientId: 4,
                    Quantity: 1.5
                },
                {
                    RecipeId: 3,
                    IngredientId: 1,
                    Quantity: 10
                },

            ]);
        });
};
