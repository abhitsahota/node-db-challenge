
exports.up = function(knex) {
    // creating the project and task tables
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('id')
        tbl.string('project_name', 128).notNullable()
        tbl.string('project_description')
        tbl.boolean('project_status').defaultTo(false)
    })
    .createTable('tasks', tbl => {
        tbl.increments('id')
        tbl.string('task_description').notNullable()
        tbl.string('task_notes')
        tbl.boolean('task_status').defaultTo(false)
        tbl.integer('projects_id')
            .notNullable()
            .unsigned()
            .references('projects.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
    .createTable('resources', tbl => {
        tbl.increments('id')
        tbl.string('resource_name', 128).notNullable().unique()
        tbl.string('resource_description')
    })
    .createTable('projects_resources', tbl => {
        tbl.integer('projects_id')
            .notNullable()
            .unsigned()
            .references('projects.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('resources_id')
            .notNullable()
            .unsigned()
            .references('resources.id') 
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.primary(['projects_id', 'resources_id'])
    })

};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')

};
