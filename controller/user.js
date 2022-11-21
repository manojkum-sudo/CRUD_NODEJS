// import { req } from 'express';
import userModel from  '../models/user.js';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';


export const singupUser = async (req, res) => {
    try {
        // const salt = await bcrypt.genSalt();
        // const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = { username: req.body.username, name: req.body.name, password: hashedPassword }

        const newUser = new userModel(user);
        await newUser.save();
         
        const token = jwt.sign({_id:user._id}, 'jsonprivatekey');
        return res.header('x-auth-header',token).status(200).json({ message: 'Signup successfull' });
    } catch (error) {
        return res.status(500).json({ message: 'Error while signing up user' });
    }
}

export const loginUser = async (req, res,next) => {
    let user = await userModel.findOne({ name: req.body.name });
    if (!user) {
        return res.status(400).json({ message: 'name does not match' });
    }

    try {
        let match = await bcrypt.compare(req.body.password, user.password);
        if (match) {
            const token = jwt.sign({_id:user._id}, 'jajakkaakk');
            res.send(token);
        
        } else {
            res.status(400).json({ message: 'Password does not match' })
        }
    } catch (error) {
         res.status(500).json({ message: 'error while login the user' })
        // next(error);
    }
}

