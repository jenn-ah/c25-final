exports.up = function(knex, Promise) {
  return knex.schema.createTable('vendorPosts', (table)=>{
    table.increments('id');
    table.integer('post_id').references('id').inTable('posts').notNullable();
    table.integer('vendor_id').references('id').inTable('vendors').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })  
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('vendorPosts');
  };