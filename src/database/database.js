const Sequelize = require('sequelize');

// configuración de la base de datos usando sequelize y variables de ambientes
const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres'
    }    

);

module.exports = sequelize;