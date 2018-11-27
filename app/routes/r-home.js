module.exports = function(app){
    app.get('/home', function(req, res){
        //verificar autorização
        (function(req, res){
            if(!req.session.user){
              res.redirect('login');  
            }
        })(req, res);



        var nickname = req.session.user;
        // console.log(nickname);

        var titulo = "Início";
        res.render('home', {nome: nickname, titulo: titulo});

    });
}