// inicializar express
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require('flash');

// almancenar datos en la memoria del servidor
const session = require('express-session');
const pgSession = require('express-pg-session');


// autenticación
const passport = require('passport');

// inicializar
const app = express();

// inicializar la base de datos
const sequelize = require('./database/database');
const Users = require('./model/users');


// configuration
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// variables globales
app.use((req, res, next) => {
    next();
});

// routes
app.use(require('./routes'));
app.use('/index', require('./routes/index'));
app.use('/users', require('./routes/users'));


// start server
(async () => {
    // conectamos la base de datos
    await sequelize.sync(
        {force: false}
    );
    console.log('test server started')
    app.listen(app.get('port'), ()=>{
        console.log('server listening on port', app.get('port'));
    });


})();
