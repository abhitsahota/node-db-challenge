
exports.seed = function(knex, Promise) {

      return knex('resources').insert([
        {resource_name: 'resOne', resource_description: 'this is a description, one'},
        {resource_name: 'resTwo'},
        {resource_name: 'resThree', resource_description: 'this is a description, three'},
        {resource_name: 'resFour', resource_description: 'this is a description, four'},
      ]);
};
