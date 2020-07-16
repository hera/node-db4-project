
exports.up = function(knex) {
    return knex.schema
        .createTable("Instruction", table => {
            table.increments("Id");
            table.text('Content')
                .notNullable()
            table.integer("RecipeId")
                .unsigned()
                .notNullable()
                .references("Id")
                .inTable("Recipe")
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('Instruction');
};
