module.exports = function(app) {
    app.get('/game', function(req, res){
        //verificar autorização
        (function(req, res){
            if(!req.session.user){
              res.redirect('login');  
            }
        })(req, res);
        
        var conn = require('../../config/dbconnect');
        
        conn.query("SELECT * FROM equipes order by pontos", function(error, result){
            // for (let i = 0; i < result.length; i++) {
            //     const primeiro = result[i].equipe;
            //     console.log(primeiro);
            // }
                var primeiro = result[7].equipe;
                var segundo = result[6].equipe;
                var terceiro = result[5].equipe;
                var quarto = result[4].equipe;
                var quinto = result[3].equipe;
                var sexto = result[2].equipe;
                var setimo = result[1].equipe;
                var oitavo = result[0].equipe;
                
                var primeiroponto = result[7].pontos;
                var segundoponto = result[6].pontos;
                var terceiroponto = result[5].pontos;
                var quartoponto = result[4].pontos;
                var quintoponto = result[3].pontos;
                var sextoponto = result[2].pontos;
                var setimoponto = result[1].pontos;
                var oitavoponto = result[0].pontos;
                
                
                
                var titulo = "Jogo";
                res.render('game', {
                    titulo: titulo, 
                    primeiro: primeiro,
                    segundo: segundo,
                    terceiro: terceiro,
                    quarto: quarto,
                    quinto: quinto,
                    sexto: sexto,
                    setimo: setimo,
                    oitavo: oitavo,
                    primeiroponto: primeiroponto,
                    segundoponto: segundoponto,
                    terceiroponto: terceiroponto,
                    quartoponto: quartoponto,
                    quintoponto: quintoponto,
                    sextoponto: sextoponto,
                    setimoponto: setimoponto,
                    oitavoponto: oitavoponto
                });
            });


    });
}