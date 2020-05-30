
exports.seed = function(knex, Promise) {
      return knex('projects').insert([
        {project_name: 'projOne', project_description: 'this is a description, one', project_status: true},
        {project_name: 'projTwo', project_status: true},
        {project_name: 'projThree', project_description: 'this is a description, three'},
        {project_name: 'projFour', project_description: 'this is a description, four', project_status: false},
      ]);
};
