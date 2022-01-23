const express = require('express');
const users = require('../model/users');

const Users = {};

Users.getAllUsers = async (req, res, next) => {
    try {
        // devuelve todos los usuarios de la tabla Users
        const allUsers = await users.findAll();
        return res.send(allUsers);
    } catch (err) {
        return res.send(err);
    }
};

Users.getUser = async (req, res, next) => {
    try {
        // encuentra un usuario segun su id
        const user = await users.findByPk(req.params.id);
        return res.send(user);
    } catch (err) {
        return res.send(err);
    }
};

Users.createUser = async (req, res, next) => {
    try {
        // crea un nuevo usuario
        const USER_MODEL = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        };
        const user = await users.create(USER_MODEL);
        console.log('user created correctly');
        return res.send(user);
    } catch (err) {
        return res.send(err);
    }
};

Users.updateUser = async (req, res, next) => {
    try {
        const USER_MODEL = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
        const user = await users.update(USER_MODEL, { where: { id: req.params.id } });
        return res.send(user);
    } catch (err) {
        return res.send(error);
    }
};

Users.deleteUser = async (req, res, next) => {
    try {
        await users.destroy({ where: { id: req.params.id } });
        console.log('user deleted correctly');
        return res.send('user deleted')
    } catch (err) {
        return res.send(error);
    }
};


module.exports = Users;