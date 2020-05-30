const express = require('express');

const dbMethod = require('./projects-model');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = await dbMethod.find()
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ msg: 'request could not be completed', error: err})
    }
})

router.post('/', async(req, res) => {
    try {
        const result = await dbMethod.add(req.body)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ msg: 'request could not be completed', error: err})
    }
})

router.get('/tasks', async (req, res) => {
    try {
        const result = await dbMethod.findTasks()
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ msg: 'request could not be completed', error: err})
    }
})

router.post('/:id/tasks', async(req, res) => {
    req.body.projects_id = req.params.id
    try {
        const result = await dbMethod.addTask(req.body)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ msg: 'request could not be completed', error: err})
    }
})

module.exports = router