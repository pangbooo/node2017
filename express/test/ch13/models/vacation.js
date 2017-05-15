var mongoose = require('mongoose');

//创建模式
var vacationSchema = mongoose.Schema({
    name:String,
    slug:String,
    category:String,
    sku:String,
    description:String,
    priceIncents:Number,
    tags:String,
    inSeason:Boolean,
    maximunGuests:Number,
    note:String,
    packagesSold:Number
});
    //定义模式方法
vacationSchema.methods.getDisplayPrice = function(){
    return $ + (this.priceIncents / 100).toFixed(2)
};

//创建模型
var Vacation = mongoose.model('Vacation', vacationSchema);

module.exports = Vacation;