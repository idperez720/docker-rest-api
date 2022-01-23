const users = require('../controllers/users');
const router = require('express').Router();

// CRUD routes
/// consulta todos los usuarios
router.get('/', users.getAllUsers);

/// consulta un usuario
router.get('/:id', users.getUser);

/// crea un nuevo usuario
router.post('/', users.createUser);

/// actualiza un usuario
router.put('/:id', users.updateUser);

/// elimina un usuario
router.delete('/:id', users.deleteUser);

module.exports = router;