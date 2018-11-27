module.exports = function(app) {
    app.get('/adminnn', function(req, res){
        //verificar autorização
        // (function(req, res){
        //     if(!req.session.user || req.session.user != "kim3dis" || 
        //     req.session.user != "hippiestar" ||
        //     req.session.user != "Hippiestar" ||
        //     req.session.user != "HippieStar" ||
        //     req.session.user != "anavictória" ||
        //     req.session.user != "Anavictória" ||
        //     req.session.user != "AnaVictória" ||
        //     req.session.user != "coldsun" ||
        //     req.session.user != "Coldsun" ||
        //     req.session.user != "ColdSun" ||
        //     req.session.user != "thecoldsun" || req.session.user != "TheColdsun" ){
        //       res.redirect('home');  
        //     }
        // })(req, res);

        console.log(req.session.user);

        // app.get('io').emit('msgParaCliente');
        if(!req.session.autorized){
                res.redirect('login'); 
        }else {
            var titulo = "Administração";
            res.render('admin', {titulo: titulo});
        }
    });
}