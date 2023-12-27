var mongoose = require('mongoose') 

var studentschema = new mongoose.Schema({
    Name:{
        type:String
    },
    Maths:{
        type:Number
    },
    Science:{
        type:Number
    },
    English:{
        type:Number
    },Hindi:{
        type:Number
    },
    Gujarati:{
        type:Number
    },
    Total: {
        type: Number
    },
    Percentage: {
        type: Number 
    },
    PassFail:{
        type:String
    }

});

module.exports = mongoose.model('Student-Detail',studentschema)