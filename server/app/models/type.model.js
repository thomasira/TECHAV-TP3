module.exports = (connex, Sequelize) => {
    const Type = connex.define('type', {
        type: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, { timestamps: false })

    return Type
}