exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('post_statuses').del()
    .then(function () {
      // Inserts seed entries
      return knex('post_statuses').insert([
        {id: 1, type: 'open'},
        {id: 2, type: 'for_review'},
        {id: 3, type: 'approved'},
        {id: 4, type: 'closed'},
        {id: 5, type: 'current'},
        {id: 6, type: 'waiting'},
        {id: 7, type: 'finished'},
        {id: 8, type: 'denied'}
      ]);
    });
};