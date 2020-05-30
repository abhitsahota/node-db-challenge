const db = require('../../data/db-config')

module.exports = {
    find,
    add,
    findTasks,
    addTask
}

function find() {
    return db('projects')
}

function add(info) {
    return db('projects')
    .insert(info, 'id')
    .then(ids => {
        const [id] = ids;
        return find();
    });
}

function findTasks() {
    // includes project name and description
    return db('tasks as t')
    .select('t.id', 't.task_description', 't.task_notes', 't.task_status', 'p.project_name', 'p.project_description' )
    .join('projects as p', 't.projects_id', "p.id")
    .orderBy('t.id')
}

function addTask(info) {
    return db('tasks')
    .insert(info, 'id')
    .then(ids => {
        const [id] = ids;
        return findTasks();
    });
}