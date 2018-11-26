module.exports = function(app){
    app.post('/verificarCad', function(req, res){
        var conn = require('../../config/dbconnect');
        var cad = req.body;
        var cad_nome = cad.nickname;
        var cad_passw = cad.password;
        var cad_passwConfirm = cad.confirmpassword;


        // var salvarDados = function(cad, conn, callback){
        //     conn.query('INSERT INTO info_usuarios SET ?', cad, callback);
        // }

        // salvarDados(cad, conn, function(error, result){
        //     res.redirect('/home');
        // });

        if (cad_passw == cad_passwConfirm) {
            console.log(cad_passw);
            console.log(cad_passwConfirm);



            
            conn.query('SELECT NOME FROM info_usuarios', function(error, result){
                if (error) throw error;
                for (var i = 0; i < result.length; i++) {
                    console.log(result[i].NOME);
                    if (cad_nome != result[i].NOME) {
                        var reallength = result.length - 1;
                        if(i == reallength){

                            (function(cad, conn, callback){
                                conn.query('INSERT info_usuarios(NOME, SENHA) values(?, ?)', [cad_nome, cad_passw], callback);
                            })(cad, conn, function(error, result){
                                res.redirect('/login');
                            });
                            break;

                        }
                    }
                }
            });


            console.log("fora");

            // conn.query('INSERT info_usuarios(NOME, SENHA) values(?, ?)', [cad_nome, cad_passw], function(error, result) {
            //     console.log(result.NOME);                
            // });


            
        } else {
            res.redirect('/registerror');
        }



        

        // res.redirect('home');
    });
}