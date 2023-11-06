exports.up = function(knex) {
    return knex.schema.createTable('order_details', table => {
        table.increments('id').primary();
        table.integer('order_id').unsigned().notNullable();
        table.foreign('order_id').references('id').inTable('orders');
        table.integer('dish_id').unsigned().notNullable();
        table.foreign('dish_id').references('id').inTable('dishes');
        table.integer('quantity').unsigned().notNullable();
        table.decimal('unit_price', 10, 2).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('order_details');
};