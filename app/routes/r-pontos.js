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
    app.post('/addAzulPontos', function(req, res){
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

    // Cinza
    app.post('/addCinzaPontos', function(req, res){
        var conn = require('../../config/dbconnect');
        var btn = req.body;
        var add = parseInt(btn.positivo);
        conn.query('SELECT pontos FROM equipes WHERE equipe = "cinza"', function(error, result){
            var resultado = result[0].pontos;
            var novo = resultado + add;
            conn.query("UPDATE equipes SET pontos = '?' WHERE equipe = 'cinza'", [novo], function(error, result){
                res.redirect('/admin');
            });
        });        
    });

    app.post('/rmCinzaPontos', function(req, res){
        var conn = require('../../config/dbconnect');
        var btn = req.body;
        var add = parseInt(btn.negativo);
        conn.query('SELECT pontos FROM equipes WHERE equipe = "cinza"', function(error, result){
            var resultado = result[0].pontos;
            var novo = resultado - add;
            conn.query("UPDATE equipes SET pontos = '?' WHERE equipe = 'cinza'", [novo], function(error, result){
                res.redirect('/admin');
            });
        });        
    });

    // Laranja
    app.post('/addLaranjaPontos', function(req, res){
        var conn = require('../../config/dbconnect');
        var btn = req.body;
        var add = parseInt(btn.positivo);
        conn.query('SELECT pontos FROM equipes WHERE equipe = "laranja"', function(error, result){
            var resultado = result[0].pontos;
            var novo = resultado + add;
            conn.query("UPDATE equipes SET pontos = '?' WHERE equipe = 'laranja'", [novo], function(error, result){
                res.redirect('/admin');
            });
        });        
    });

    app.post('/rmLaranjaPontos', function(req, res){
        var conn = require('../../config/dbconnect');
        var btn = req.body;
        var add = parseInt(btn.negativo);
        conn.query('SELECT pontos FROM equipes WHERE equipe = "laranja"', function(error, result){
            var resultado = result[0].pontos;
            var novo = resultado - add;
            conn.query("UPDATE equipes SET pontos = '?' WHERE equipe = 'laranja'", [novo], function(error, result){
                res.redirect('/admin');
            });
        });        
    });

    // Azul
    app.post('/addMarromPontos', function(req, res){
        var conn = require('../../config/dbconnect');
        var btn = req.body;
        var add = parseInt(btn.positivo);
        conn.query('SELECT pontos FROM equipes WHERE equipe = "marrom"', function(error, result){
            var resultado = result[0].pontos;
            var novo = resultado + add;
            conn.query("UPDATE equipes SET pontos = '?' WHERE equipe = 'marrom'", [novo], function(error, result){
                res.redirect('/admin');
            });
        });        
    });

    app.post('/rmMarromPontos', function(req, res){
        var conn = require('../../config/dbconnect');
        var btn = req.body;
        var add = parseInt(btn.negativo);
        conn.query('SELECT pontos FROM equipes WHERE equipe = "marrom"', function(error, result){
            var resultado = result[0].pontos;
            var novo = resultado - add;
            conn.query("UPDATE equipes SET pontos = '?' WHERE equipe = 'marrom'", [novo], function(error, result){
                res.redirect('/admin');
            });
        });        
    });

    // Roxa
    app.post('/addRoxaPontos', function(req, res){
        var conn = require('../../config/dbconnect');
        var btn = req.body;
        var add = parseInt(btn.positivo);
        conn.query('SELECT pontos FROM equipes WHERE equipe = "roxa"', function(error, result){
            var resultado = result[0].pontos;
            var novo = resultado + add;
            conn.query("UPDATE equipes SET pontos = '?' WHERE equipe = 'roxa'", [novo], function(error, result){
                res.redirect('/admin');
            });
        });        
    });

    app.post('/rmRoxaPontos', function(req, res){
        var conn = require('../../config/dbconnect');
        var btn = req.body;
        var add = parseInt(btn.negativo);
        conn.query('SELECT pontos FROM equipes WHERE equipe = "roxa"', function(error, result){
            var resultado = result[0].pontos;
            var novo = resultado - add;
            conn.query("UPDATE equipes SET pontos = '?' WHERE equipe = 'roxa'", [novo], function(error, result){
                res.redirect('/admin');
            });
        });        
    });

    // Verde
    app.post('/addVerdePontos', function(req, res){
        var conn = require('../../config/dbconnect');
        var btn = req.body;
        var add = parseInt(btn.positivo);
        conn.query('SELECT pontos FROM equipes WHERE equipe = "verde"', function(error, result){
            var resultado = result[0].pontos;
            var novo = resultado + add;
            conn.query("UPDATE equipes SET pontos = '?' WHERE equipe = 'verde'", [novo], function(error, result){
                res.redirect('/admin');
            });
        });        
    });

    app.post('/rmVerdePontos', function(req, res){
        var conn = require('../../config/dbconnect');
        var btn = req.body;
        var add = parseInt(btn.negativo);
        conn.query('SELECT pontos FROM equipes WHERE equipe = "verde"', function(error, result){
            var resultado = result[0].pontos;
            var novo = resultado - add;
            conn.query("UPDATE equipes SET pontos = '?' WHERE equipe = 'verde'", [novo], function(error, result){
                res.redirect('/admin');
            });
        });        
    });

    // Vermelha
    app.post('/addVermelhaPontos', function(req, res){
        var conn = require('../../config/dbconnect');
        var btn = req.body;
        var add = parseInt(btn.positivo);
        conn.query('SELECT pontos FROM equipes WHERE equipe = "vermelha"', function(error, result){
            var resultado = result[0].pontos;
            var novo = resultado + add;
            conn.query("UPDATE equipes SET pontos = '?' WHERE equipe = 'vermelha'", [novo], function(error, result){
                res.redirect('/admin');
            });
        });        
    });

    app.post('/rmVermelhaPontos', function(req, res){
        var conn = require('../../config/dbconnect');
        var btn = req.body;
        var add = parseInt(btn.negativo);
        conn.query('SELECT pontos FROM equipes WHERE equipe = "vermelha"', function(error, result){
            var resultado = result[0].pontos;
            var novo = resultado - add;
            conn.query("UPDATE equipes SET pontos = '?' WHERE equipe = 'vermelha'", [novo], function(error, result){
                res.redirect('/admin');
            });
        });        
    });



}