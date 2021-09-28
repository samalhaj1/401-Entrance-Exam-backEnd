"use strict";
const mongoose = require('mongoose');

const fruitSchema =mongoose.Schema({
    name : String,
    image :String,
    price : String,

});
const fruitsmodel =mongoose.models("fruits", fruitSchema);
module.exports={fruitsModel};