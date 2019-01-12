const {Sheet} = require('../models')

module.exports = {
    async post(req,res){
        try{
        var sheet = await Sheet.create(req.body)
        res.send(sheet)
        }
        catch(err){
            console.log(err)
        }

    },

    async getAll(req,res){
        try{
            var sheets = await Sheet.findAll({
                where: {
                    categoryId : req.params.id
                }
            })
            res.send(sheets)
        }
        catch(err){
            console.log(err)
        }
    },

    async delete(req,res){
        try{
            var sheet = await Sheet.findById(req.params.id)
            Sheet.destroy()
            res.send(sheet + "was deleted")
        }
        catch(err){
            console.log(err)
        }
    },

    async getOne(req,res){
        try{
            var category = await Category.findById(req.params.id)
            res.send(category)
        }
        catch(err){
            console.log(err)
        }
    },

    async edit(req,res){
        try{
            var category = await Category.update(req.body,{
                where :{
                    id : req.params.id
                }
            })
            res.send(category)
        }
        catch(err){
            console.log(err)
        }
    }
}