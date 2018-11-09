const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    'mongodb://goweek:goweek123@ds155313.mlab.com:55313/goweek-backend-roger',
    {
        useNewUrlParser: true
    }
);

app.use(require('./routes'));

app.listen(3000, () => {
    console.log('Server Started on port 3000');
});
