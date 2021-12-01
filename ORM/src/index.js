const express = require('express');
const http = require('http');
const routesBancoBAN = require('./api/routes/BancoBANRoutes.js');
const routesCartaoCRT = require('./api/routes/CartaoCRTRoutes.js');

require('./database/indexDb.js');

const app = express();

app.set('url', 'http://localhost:');
app.set('porta', 3001);

app.use(express.json());
app.use(routesBancoBAN);
app.use(routesCartaoCRT);

http.createServer(app).listen(app.get('porta'), function() {
    console.log('\nServidor Rodando ' + app.get('url') + app.get('porta'));
});
