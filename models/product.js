let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var Product = new Schema(
    {
        name: {
            type: String,
            required : [ true, 'product name is required'],
            lowercase : true
        },
        price: {
            type: Number,
            default: 0
        },
        stock :
        {
            type: Number,
            default : 0
        }
    }, 
    {
        timestamps: true //adds created and updated time stamp to database.
    });

module.exports = mongoose.model('Product', Product);