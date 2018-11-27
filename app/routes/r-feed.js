module.exports = function(app){
    app.get('/feed', function(req, res){
        //verificar autorização
        (function(req, res){
            if(!req.session.user){
              res.redirect('login');  
            }
        })(req, res);

        var titulo = "Cronograma";
        res.render('feed', {titulo: titulo});
    });
}