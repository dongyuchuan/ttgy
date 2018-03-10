var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var Goods = new Schema({
    goodsname : String,
    myprice   : Number,
    goodimg   : String,
    create_date:{type:Date,default:Date.now} 
});
var UserModel = mongoose.model('goods',Goods);

module.exports = UserModel