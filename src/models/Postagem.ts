const db = require('../database/index')

const Postagem = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    autor: {
        type: db.Sequelize.STRING
    },
    publicacao: {
        type: db.Sequelize.STRING
    }
})

module.exports = Postagem