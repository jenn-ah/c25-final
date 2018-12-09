
exports.up = function(knex, Promise) {
return knex.schema.createTable('messages', (table)=>{
  table.increments('id');
  table.string('body', 255).notNullable();
  table.integer('customer_id').references('id').inTable('customers').notNullable();
  table.integer('vendor_id').references('id').inTable('vendors').notNullable();
  table.integer('post_id').references('id').inTable('posts').notNullable();
  table.timestamp('created_at').defaultTo(knex.fn.now());
  table.timestamp('updated_at').defaultTo(knex.fn.now());
})  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages');
};
