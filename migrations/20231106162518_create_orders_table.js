exports.up = function(knex) {
    return knex.schema.createTable('orders', table => {
        table.increments('id').primary();
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('id').inTable('users');
        table.datetime('order_date').notNullable();
        table.string('status').notNullable();
        table.decimal('total', 10, 2).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('orders');
};