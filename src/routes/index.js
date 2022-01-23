const express = require('express');
const controller = require('../controllers/controllers');
const router = require('express').Router();

router.get('/', controller.helloWorld);

module.exports = router;