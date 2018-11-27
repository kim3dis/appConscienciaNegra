module.exports.iniciaChat = function (aplication, req, res) {
    aplication.get('io').emit(
        'msgParaCliente',
        "teste"
        );
    res.render("chat");
}