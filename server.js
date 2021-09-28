'use strict';
const express = require ('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3080;

const {getIndex} = require('./controlletrs/index.controller');
const {getFruits} = require('./controlletrs/fruits.controller');

app.get('/',getIndex, fruitsModel,getFruits);
app.get('/fruits',getFruits);

app.listen(PORT,() => {
    console.log(`app is starting at port ${PORT}`);
}

);