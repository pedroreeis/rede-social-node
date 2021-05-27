const Sequelize = require('sequelize')
const sequelize = new Sequelize('nodejs', 'root', '', {
    dialect: 'mysql',
    host: 'Localhost'
})

module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize
}