exports.up = function (knex) {
  return knex.schema.createTable("favorites", (table) => {
    table.increments("id").primary();
    table.integer("user_id").unsigned().notNullable();
    table.foreign("user_id").references("users.id");
    table.integer("dish_id").unsigned().notNullable();
    table.foreign("dish_id").references("dishes.id");
    table.unique(["user_id", "dish_id"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("favorites");
};
