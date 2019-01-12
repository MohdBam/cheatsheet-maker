module.exports = (sequelize,DataTypes) => {
    const Sheet = sequelize.define("Sheet", {
        title : DataTypes.STRING,
        description : DataTypes.TEXT,
        categoryId: DataTypes.INTEGER
    })

    return Sheet
}   