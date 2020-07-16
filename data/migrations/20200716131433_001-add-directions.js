
exports.up = function(knex) {
    return knex.schema.alterTable('Recipe', table => {
        table.text("Directions");
    });
};

exports.down = function(knex) {
    return knex.schema.table('Recipe', table => {
        table.dropColumn("Directions");
    });
};
