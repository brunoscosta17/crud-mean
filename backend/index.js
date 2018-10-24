const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

const { mongoose } = require('./database');

// Configurações
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

//Routes
app.use('/api/users', require('./routes/user.routes'));

//Iniciando o servidor
app.listen(app.get('port'), () => {
    console.log('Servidor na porta', app.get('port'));    
});