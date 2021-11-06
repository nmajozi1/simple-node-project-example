const express = require('express');
const genService = require('../services/generic.service');

const router = express.Router();

router.get('/getSpliced', (req, res)=> {
    genService.getSpliced()
    .then(respose => res.status(200).send(respose))
    .catch(error => res.status(400).send(error));
});

router.get('/getMatch', (req, res) => {
    genService.getMatchingWord()
    .then(response => res.status(200).send(response))
    .catch(error => res.status(400).send(error));
});

module.exports = router;