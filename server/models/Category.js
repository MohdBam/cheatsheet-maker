module.exports = (sequelize,DataTypes) => {
    const Category = sequelize.define("Category", {
        name : DataTypes.STRING,
        image : DataTypes.STRING,
        description : DataTypes.STRING
    })

    return Category
}   