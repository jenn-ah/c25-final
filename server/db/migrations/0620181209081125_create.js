
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (table)=>{
    table.increments('id');
    table.string('title', 255).notNullable();
    table.integer('category_id').references('id').inTable('categories').notNullable();
    table.integer('customer_id').references('id').inTable('customers').notNullable();
    table.integer('post_status_id').references('id').inTable('post_statuses');
    table.integer('post_priority_id').references('id').inTable('post_priorities');
    table.integer('vendor_id').references('id').inTable('vendors');
    table.string('photo', 300);
    table.string('description', 1000);
    table.string('city', 255);
    table.string('state', 50);
    table.integer('zip_code');
    table.integer('budget');
    table.boolean('can_bid').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
