const dbConfig = require('../config/db.config.js')
const Sequelize = require('sequelize')
const connex = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host:dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: 3306,
    operatorAliases: false
})
const db = {}
db.Sequelize = Sequelize
db.connex = connex

//models
db.products = require('./product.model.js')(connex, Sequelize)
db.types = require('./type.model.js')(connex, Sequelize)

//assoc
db.products.belongsTo(db.types, { foreignKey: { allowNull:false } })
db.types.hasMany(db.products)

module.exports = db
