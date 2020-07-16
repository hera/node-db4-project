
exports.seed = function(knex) {
  return knex('Ingredient').truncate()
      .then(function () {
          return knex('Ingredient').insert([
              { name: "Flour" },
              { name: "Salt" },
              { name: "Pepper" },
              { name: "Eggs" },
              { name: "Tomatoes" },
              { name: "Mayo" },
              { name: "Olive oil" },
              { name: "Cheese" },
              { name: "Buckwheat" },
              { name: "Onion" }
          ]);
      });
};
