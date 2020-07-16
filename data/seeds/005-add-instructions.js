
exports.seed = function(knex) {
    return knex('Instruction').truncate()
        .then(function () {
            return knex('Instruction').insert([
                {
                    Content: "In a shallow container, blend soy sauce, honey, vegetable oil, lime juice, and garlic. Place chicken breast halves into the mixture, and turn to coat. Cover, and marinate in the refrigerator at least 30 minutes.",
                    RecipeId: 1
                },
                {
                    Content: "Preheat an outdoor grill for high heat.",
                    RecipeId: 1
                },
                {
                    Content: "Lightly oil the grill grate. Discard marinade, and grill chicken 6 to 8 minutes on each side, until juices run clear.",
                    RecipeId: 1
                }
            ]);
        });
};
