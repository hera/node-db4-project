
exports.up = function(knex) {
    return knex.schema
        .createTable("Recipe", table => {
            table.increments("Id");
            table.text('Name', 128)
                .notNullable();
        })
        .createTable("Ingredient", table => {
            table.increments("Id");
            table.text('Name', 128)
                .notNullable();
        })
        .createTable("RecipeIngredient", table => {
            table.increments("Id");
            table.integer("RecipeId")
                .unsigned()
                .notNullable()
                .references("Id")
                .inTable("Recipe")
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table.integer("IngredientId")
                .unsigned()
                .notNullable()
                .references("Id")
                .inTable("Ingredient");
            table.float("Quantity", 2)
                .notNullable();
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('RecipeIngredient')
        .dropTableIfExists('Ingredient')
        .dropTableIfExists('Recipe');
};
