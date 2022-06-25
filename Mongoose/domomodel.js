'use strick';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    titie : String,
    published:{
        type : Date,
        default: DataTransfer.now
    },
    keywords:Array,
    published:Boolean,
    author:{
        type: Schema.ObjectId,
        ref:'User'
    },
    //Embedd Sub-documents
    detail:{
        modelNumber:Number,
        hardcover :Boolean,
        reviews : Number,
        rank:Number
    }
  
})

module.exports = mongoose.model('Book', BookSchema);
