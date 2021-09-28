'use strict';
const axios = require('axios');
require('dotenv').config();
const {request, response}= require('express');

const {Fruits}=require('../models/fruits.models');

const getFruits = async (request, response) => {
    const url =' https://fruit-api-301.herokuapp.com/getFruit/';
await axios.get(url).then ((result) => {
    console.log('Hello',result.data);
    const fruitsWanted = result.data.map((item) =>{
        return new Fruits (item.name, item.image, item.price);
    })
    response.json(fruitsWanted);
    
    
}
);
};

const addFruits = async (request, response) => {
    const {name, image, price} = request.body;

    const newFruits = new myFruitsModel({
        name,
        image,
        price
    });

    newFruits.save();
    response.json(newFruits)
};

const deleteFruits = async(request, response) => {
    const {}
}






module.exports= {getFruits};





