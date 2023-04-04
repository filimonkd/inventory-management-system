const Item = require('../models/itemModel')

exports.getAllItems = async(req,res,next)=>{
    
    try {
        const items = await Item.find()
        res.status(200).json({
            status:'success',
            results: items.length,
            data:{
                items
            }
        });
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail"
        })
    }
    
}

//localhost:3000/api/items/id
exports.getOneItem = async(req,res,next)=>{
    
    try {
        const item = await Item.findById(req.params.id);
        res.status(200).json({
            status:'success',
            data:{
                item
            }
        });
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail"
        })
    }
    
}


exports.addItem = async(req,res,next)=>{
    
    try {
        const item = await Item.create(req.body);
        res.status(200).json({
            status:'success',
            data:{
                item
            }
        });
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail"
        })
    }
    
}

exports.updateItem = async(req,res,next)=>{
    
    try {
        const item = await Item.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidators:true
        });
        res.status(200).json({
            status:'success',
            data:{
                item
            }
        });
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail"
        })
    }
    
}

exports.deleteItem = async(req,res,next)=>{
    
    try {
        const item = await Item.findOneAndDelete(req.params.id);
        res.status(200).json({
            status:'success',
        });
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail"
        })
    }
    
}