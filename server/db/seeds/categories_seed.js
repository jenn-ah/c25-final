exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, name: 'automotive'},
        {id: 2, name: 'eletrical'},
        {id: 3, name: 'plumbing'},
        {id: 4, name: 'landscaping'},
        {id: 5, name: 'tayloring'},
        {id: 6, name: 'childcare'},
        {id:7, name: 'painting'},
        {id:8, name: 'carpentry'},
        {id: 9, name: 'pressure_washing'},
        {id:10, name: 'other'},

      ]);
    });
};