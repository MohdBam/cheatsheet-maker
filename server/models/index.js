const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const db = {}

const sequelize = new Sequelize("cheatSheetMaker","mohd","mohd",{
    dialect : "sqlite",
    host : "localhost",
    storage: path.resolve(__dirname,"../../cheatSheetMaker.sqlite")
})

fs
.readdirSync(__dirname)
.filter(file => file !== "index.js")
.forEach(file => {
    const model = sequelize.import(path.join(__dirname,file))
    db[model.name] = model
    console.log(db[model.name])
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db