module.exports = function(app){
    app.get('/graphic', function(req, res){
        var titulo = "Gráficos";
        res.render('graphic', {titulo: titulo});
    });
}