module.exports = function(app) {
    app.get('/admin', function(req, res){
        var titulo = "Administração";
        res.render('admin', {titulo: titulo});
    });
}