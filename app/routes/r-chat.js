module.exports = function(app){
    app.get('/chat', function(req, res){
        var titulo = "Pergunte";
        res.render('chat', {titulo: titulo});
    });
}