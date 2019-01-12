const {Category} = require('../models')

module.exports = {
    async post(req,res){
        try{
        var category = await Category.create(req.body)
        res.send(category)
        }
        catch(err){
            console.log(err)
        }

    },

    async getAll(req,res){
        try{
            var categories = await Category.findAll()
            res.send(categories)
        }
        catch(err){
            console.log(err)
        }
    },

    async delete(req,res){
        try{
            var category = await Category.findById(req.params.id)
            category.destroy()
            res.send(category + "was deleted")
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