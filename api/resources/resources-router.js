const express = require('express');

const dbMethod = require('./resources-model');

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

module.exports = router