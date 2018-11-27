module.exports = function(app){
    app.get('/research', function(req, res){
        //verificar autorização
        (function(req, res){
            if(!req.session.user){
              res.redirect('login');  
            }
        })(req, res);
        
        var titulo = "Pesquisa";
        res.render('research', {titulo: titulo});
    });




    app.post('/finishResearch', function(req, res){
        //verificar autorização
        (function(req, res){
            if(!req.session.user){
              res.redirect('login');  
            }
        })(req, res);
        
        var conn = require('../../config/dbconnect');
        var form = req.body;
        var clareza = form.clareza;
        var considera = form.considera;
        var abordado = form.abordado;
        var nickname = req.session.user;




        conn.query("UPDATE info_usuarios SET clareza = ?, considera = ?, abordado = ? WHERE NOME = ?", [clareza, considera, abordado, nickname], function(error, result){
            console.log(error);
            console.log("");
            console.log(result);
            var titulo = "Pesquisa";
            res.render('research', {titulo: titulo});

        });
    });


    app.get('/data', function(req, res){
        (function(req, res){
            if(!req.session.user){
              res.redirect('login');  
            }
        })(req, res);
        var conn = require('../../config/dbconnect');
        


        conn.query('SELECT NOME, clareza, considera, abordado FROM info_usuarios', function(error, result){            
            conn.query('SELECT considera FROM info_usuarios WHERE considera = "Branco(a)"', function(error, brancoqntd){
                var brancosqntd = brancoqntd.length;
                conn.query('SELECT considera FROM info_usuarios WHERE considera = "Pardo(a)"', function(error, pardoqntd){
                    var pardosqntd = pardoqntd.length;
                    conn.query('SELECT considera FROM info_usuarios WHERE considera = "Amarelo(a)"', function(error, amareloqntd){
                        var amarelosqntd = amareloqntd.length;
                        conn.query('SELECT considera FROM info_usuarios WHERE considera = "Indígena"', function(error, indigenaqntd){
                            var indigenasqntd = indigenaqntd.length;  
                            conn.query('SELECT considera FROM info_usuarios WHERE considera = "Negro(a)"', function(error, negroqntd){
                                var negrosqntd = negroqntd.length;  
                                conn.query('SELECT considera FROM info_usuarios WHERE considera = "Não sabe"', function(error, naosabeqntd){
                                    var naosabemqntd = naosabeqntd.length; 

                                    var titulo = "Informações";
                                    res.render('data', {titulo: titulo, result: result, 
                                        brancosqntd: brancosqntd, pardosqntd: pardosqntd, 
                                        amarelosqntd: amarelosqntd, indigenasqntd: indigenasqntd,
                                        negrosqntd: negrosqntd, naosabemqntd: naosabemqntd
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
        
    });

}


