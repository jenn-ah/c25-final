exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {id: 1, 
          first_name: 'jane',
        last_name: 'doe',
        username: 'hellokitty',
        password: 'password',
        email: 'sanrio.com',
        city: 'honolulu',
        state: 'HI',
        zip_code: 96817
        },

      ]);
    });
};