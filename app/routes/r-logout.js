module.exports = function(app){
    app.get('/logout', function(req, res){
        var store = require('store');
        store.clearAll();
        res.redirect('/login');
    });
}