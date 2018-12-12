
exports.up = function(knex, Promise) {
  return knex.schema.createTable('vendors', (table)=>{
    table.increments('id');
    table.string('first_name', 50).notNullable();
    table.string('last_name', 50).notNullable();
    table.string('company_name', 255);
    table.string('password', 25).notNullable().unique();
    table.string('email', 50).notNullable().unique();
    table.string('street_address', 255);
    table.string('city', 100);
    table.string('state', 25).notNullable();
    table.integer('zip_code');
    table.string('photo', 300);
    table.string('website', 255);
    table.string('description', 1000);
    table.bigInteger('phone_number');
    table.string('license_number');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('vendors');
};
