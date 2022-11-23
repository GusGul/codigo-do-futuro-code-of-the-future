module.exports = {
    index: (req, res, next) => {
        res.status(200).send({ mensagem: 'Bem vindo a minha API' }); // envia(send) um objeto.
    }
};