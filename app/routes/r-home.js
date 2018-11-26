module.exports = function(app){
    app.get('/home', function(req, res){

        var store = require('store');
        var nickname = store.get('token').nickname;
        console.log(nickname);
        var titulo = "Início";
        res.render('home', {nome: nickname, titulo: titulo});

    });
    app.get('/', function(req, res){

        var store = require('store');
        var nickname = store.get('token').nickname;
        console.log(nickname);
        var titulo = "Início";
        res.render('home', {nome: nickname, titulo: titulo});
    });
}