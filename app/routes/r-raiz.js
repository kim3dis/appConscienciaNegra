module.exports = function(app) {
    app.get('/', function(req, res){
        // console.log(nickname);
        var titulo = "/";
        res.render('raiz');
    });
}