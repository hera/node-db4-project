
exports.seed = function(knex) {
    return knex('Recipe').truncate()
        .then(function () {
            return knex('Recipe').insert([
                { name: "Key West Chicken" },
                { name: "Steakhouse Potatoes Romanoff" },
                { name: "Janet Rich Banana Bread" },
                { name: "Chicken Curry" },
                { name: "Lasagna" }
            ]);
        });
};
