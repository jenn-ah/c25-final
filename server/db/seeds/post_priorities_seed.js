exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('post_priorities').del()
    .then(function () {
      // Inserts seed entries
      return knex('post_priorities').insert([
        {id: 1, type: 'open'},
        {id: 2, type: 'emergency'},
        {id: 3, type: 'closed'},
        {id: 4, type: 'pending'},
      ]);
    });
};