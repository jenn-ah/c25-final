
exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories',(table)=>{
    table.increments('id');
    table.string('name',25);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories')
};
