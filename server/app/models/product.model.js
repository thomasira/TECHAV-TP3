module.exports = (connex, Sequelize) => {

    const Product = connex.define('product', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.REAL,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT
        },

    }, { timestamps: false })
    
    return Product
}