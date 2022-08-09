const express = require('express');
const authMiddleware = require('../middleware/auth');

const project = requie('../models/project.js');
const task = require('../moedels/task.js');

const router = express.Router();

router.use(authMiddleware);

router.get('/', (req, res) =>{
    res.send({ ok: true });
});


module.exports = app => app.use('/project', router);