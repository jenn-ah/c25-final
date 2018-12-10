
exports.up = function(knex, Promise) {
  return knex.schema.createTable('post_priorities',(table)=>{
    table.increments('id');
    table.string('type', 25);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('post_priorities')
  ß
};
