
exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', (table)=>{
    table.increments('id');
    table.string('first_name', 50).notNullable();
    table.string('last_name', 50).notNullable();
    table.string('username', 25).notNullable().unique();
    table.string('password', 25).notNullable();
    table.string('email', 50).notNullable().unique();
    table.string('state', 50).notNullable();
    table.string('city', 50);
    table.integer('zip_code').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('customers');
};
