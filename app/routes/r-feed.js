module.exports = function(app){
    app.get('/feed', function(req, res){
        var titulo = "Cronograma";
        res.render('feed', {titulo: titulo});
    });
}