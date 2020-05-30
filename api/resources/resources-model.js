const db = require('../../data/db-config')

module.exports = {
    find,
    add
}

function find() {
    return db('resources')
}

function add(info) {
    return db('resources')
    .insert(info, 'id')
    .then(ids => {
        const [id] = ids;
        return find();
    });
}