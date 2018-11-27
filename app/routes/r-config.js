module.exports = function(app){
    app.get('/config', function(req, res){
        //verificar autorização
        (function(req, res){
            if(!req.session.user){
              res.redirect('login');  
            }
        })(req, res);

        var nickname = req.session.user;
        // console.log(nickname);
        var titulo = "Configurações";
        res.render('config', {nome: nickname, titulo: titulo});
    });
}