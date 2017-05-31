var express = require('express');
var load = require('express-load'); // biblioteca de carregamento automático
var bodyParser = require('body-parser');

module.exports = function()
{
    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(bodyParser.urlencoded({extended: true}));

    // Para evitar ter vários ‘requires’ espalhados pela aplicação, usa-se
    // carregamento automático das módulos através da lib express-load
    load('routes', { cwd: 'app'})
        .then('infra')
        .into(app);
    
    return app;
}