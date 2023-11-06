
exports.up = function(knex) {
    return knex.schema.createTable('dishes', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.text('description');
        table.decimal('price', 10, 2).notNullable();
        table.integer('category_id').unsigned().references('id').inTable('categories');
        table.string('image_url');
        table.text('ingredients');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('dishes');
};