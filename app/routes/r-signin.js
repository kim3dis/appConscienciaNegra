module.exports = function(app) {
    app.post('/verificarLogin', function(req, res){

        var conn = require('../../config/dbconnect');
        var store = require('store');
        // store.set('userr', {name: nome});
        // console.log(store.get('userr').name);
        // store.clearAll();



        var form = req.body;
        var form_nome = form.nickname;
        var form_passw = form.password;
       
        conn.query('SELECT NOME, SENHA FROM info_usuarios', function(error, result){
            for (i = 0; i < result.length; i++) {
                console.log(result[i].NOME);
                if (result[i].NOME == form_nome) {
                    console.log('Encontrado o nome!');

                    if (result[i].SENHA == form_passw) {
                        console.log('Encontrado a senha!');
                            store.set('token', {nickname: form_nome});
                            res.redirect('home');
                            break;
                    }
                    
                    break;
                }
            }
        }); // conn.query
    }); // app.post
}; // module.exports