// const Connection = require('./database/db')
// const bodyParser = require('body-parser');
// const express = require('express');
import express from 'express';
import Connection from './database/db.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/course.js';
import rout from './routes/user.js';
import {error} from './middleware/error.js'



const app = express();

app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// app.use(express.json());

app.use('/api/',router);
app.use('/auth/',rout);

app.use(error);

Connection();
const port = process.env.PORT || 3000;

app.listen(port,console.log(`server listening on ${port}`));

