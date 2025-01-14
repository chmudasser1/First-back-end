const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>This is user product.<h1/>')
});

router.get('/101', (req, res) => {
    res.send('<h1>This is user product 101.<h1/>')
});

router.get('/102', (req, res) => {
    res.send('<h1>This is user product 102.<h1/>')
});

module.exports = router;