
import express from "express";
import { singupUser ,loginUser} from "../controller/user.js";

const rout = express.Router();


//ROUTES

rout.post('/users',singupUser);
rout.post('/login',loginUser);

export default rout;