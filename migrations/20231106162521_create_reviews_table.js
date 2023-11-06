exports.up = function(knex) {
    return knex.schema.createTable('reviews', table => {
        table.increments('id').primary();
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('id').inTable('users');
        table.integer('dish_id').unsigned().notNullable();
        table.foreign('dish_id').references('id').inTable('dishes');
        table.tinyint('rating').unsigned().notNullable();
        table.text('comment');
        table.datetime('review_date').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('reviews');
};