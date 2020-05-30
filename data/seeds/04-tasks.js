
exports.seed = function(knex, Promise) {
      return knex('tasks').insert([
        {task_description: 'this is a description, one', task_notes: 'notes', task_status: false, projects_id: 1},
        {task_description: 'this is a description, two', projects_id: 1},
        {task_description: 'this is a description, three', task_notes: 'notes', task_status: true, projects_id: 1},
        {task_description: 'this is a description, four', task_notes: 'notes', projects_id: 2}
      ]);
};
