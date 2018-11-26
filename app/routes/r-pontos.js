module.exports = function(app) {
    // AMARELO
    app.post('/addAmareloPontos', function(req, res){
        var conn = require('../../config/dbconnect');
        var btn = req.body;
        var add = parseInt(btn.positivo);
        conn.query('SELECT pontos FROM equipes WHERE equipe = "amarela"', function(error, result){
            var resultado = result[0].pontos;
            var novo = resultado + add;
            conn.query("UPDATE equipes SET pontos = '?' WHERE equipe = 'amarela'", [novo], function(error, result){
                res.redirect('/admin');
            });
        });        
    });
    app.post('/rmAmareloPontos', function(req, res){
        var conn = require('../../config/dbconnect');
        var btn = req.body;
        var add = parseInt(btn.negativo);
        conn.query('SELECT pontos FROM equipes WHERE equipe = "amarela"', function(error, result){
            var resultado = result[0].pontos;
            var novo = resultado - add;
            conn.query("UPDATE equipes SET pontos = '?' WHERE equipe = 'amarela'", [novo], function(error, result){
                res.redirect('/admin');
            });
        });        
    });

    // Azul
    app.post('/addAazulPontos', function(req, res){
        var conn = require('../../config/dbconnect');
        var btn = req.body;
        var add = parseInt(btn.positivo);
        conn.query('SELECT pontos FROM equipes WHERE equipe = "azul"', function(error, result){
            var resultado = result[0].pontos;
            var novo = resultado + add;
            conn.query("UPDATE equipes SET pontos = '?' WHERE equipe = 'azul'", [novo], function(error, result){
                res.redirect('/admin');
            });
        });        
    });

    app.post('/rmAzulPontos', function(req, res){
        var conn = require('../../config/dbconnect');
        var btn = req.body;
        var add = parseInt(btn.negativo);
        conn.query('SELECT pontos FROM equipes WHERE equipe = "azul"', function(error, result){
            var resultado = result[0].pontos;
            var novo = resultado - add;
            conn.query("UPDATE equipes SET pontos = '?' WHERE equipe = 'azul'", [novo], function(error, result){
                res.redirect('/admin');
            });
        });        
    });
}