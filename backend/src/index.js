const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server); // Habilita que o server escute o protocolo ws também, além do http

mongoose.connect(
    'mongodb://goweek:goweek123@ds155313.mlab.com:55313/goweek-backend-roger',
    {
        useNewUrlParser: true
    }
);

// Middleware que tornará a variável io global
app.use((request, response, next) => {
    request.io = io;

    return next();
});

app.use(cors());
app.use(express.json()); // Indica que será usado JSON para todas as rotas
app.use(require('./routes')); // Importa o arquivo de rotas

server.listen(3000, () => {
    console.log('Server Started on port 3000');
});
