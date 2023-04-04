const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    insCode:{
        type: String,
        required: true
    },
    budgetSourceCode:{
        type: Number,
        required: true
    },
    itemCategoryCode:{
        type: Number,
        required: true
    },
    itemSubCategory:{
        type: Number,
        required: true
    },
    itemPlaceCode:{
        type: String,
        required: true
    },
    assignedDepartment:{
        type: String,
        required:true
    }
    
})

const Item = mongoose.model("Item",itemSchema)
module.exports =Item;