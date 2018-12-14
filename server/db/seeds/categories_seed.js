exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, name: 'automotive'},
        {id: 2, name: 'electrical'},
        {id: 3, name: 'plumbing'},
        {id: 4, name: 'landscaping'},
        {id: 5, name: 'clothing'},
        {id: 6, name: 'childcare'},
        {id: 7, name: 'painting'},
        {id: 8, name: 'carpentry'},
        {id: 9, name: 'cleaning'},
        {id: 10, name: 'food'},
        {id: 11, name: 'other'}

      ]);
    });
};