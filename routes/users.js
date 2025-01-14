const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>This is user router.');
});

router.get('/101', (req, res) => {
    res.send('<h1>This is user router 101.<h1/>')
})

router.get('/102', (req, res) => {
    res.send('<h1>This is user router 102.<h1/>')
});

module.exports = router;