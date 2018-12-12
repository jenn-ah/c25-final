exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('vendors').del()
    .then(function () {
      // Inserts seed entries
      return knex('vendors').insert([
        {
          id: 1,
          first_name: 'john',
          last_name: 'doe',
          company_name: 'bread',
          password: 'password',
          email: 'bread@gmail.com',
          street_address: '123 flour lane',
          city: 'honolulu',
          state: 'HI',
          zip_code: 96817,
          photo: 'img',
          website: 'breadheaven.com',
          description: 'Love fresh bread',
          phone_number: 12345678,
          license_number: '456b'
        },

      ]);
    });
};