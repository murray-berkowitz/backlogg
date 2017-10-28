const express = require('express');
const app = express();
const path = require('path');
const api = require('./api/index');

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/api', api);

app.listen(process.env.PORT || 3000);
