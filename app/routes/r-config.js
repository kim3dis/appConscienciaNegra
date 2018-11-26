module.exports = function(app){
    app.get('/config', function(req, res){
        var store = require('store');
        var nickname = store.get('token').nickname;
        console.log(nickname);
        var titulo = "Configurações";
        res.render('config', {nome: nickname, titulo: titulo});
    });
}