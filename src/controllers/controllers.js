const express = require('express');
const controller = {};

controller.helloWorld = (req, res) =>{
    res.send('Hello, world!');
};


module.exports = controller;