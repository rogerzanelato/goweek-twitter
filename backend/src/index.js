const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    'mongodb://goweek:goweek123@ds155313.mlab.com:55313/goweek-backend-roger',
    {
        useNewUrlParser: true
    }
);

app.use(express.json()); // Indica que será usado JSON para todas as rotas
app.use(require('./routes')); // Importa o arquivo de rotas

app.listen(3000, () => {
    console.log('Server Started on port 3000');
});
