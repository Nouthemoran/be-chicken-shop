import Admin from "../models/AdminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async(req, res) => {
    try {
        const response = await Admin.findAll();
        res.status(200).json(response);    
    } catch (error) {
        console.log(error.message);
    }
}

export const register = async (req, res) => {
    const { username, email, password, confPassword } = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak cocok"});
    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(password, salt);
    try{
        await Admin.create({
            username: username,
            email: email,
            password: hashPassword
        });
        res.json({msg: "Register Berhasil"});
    }catch (error) {
        console.log(error);
    }
}

export const Login = async(req, res) => {
    try {
        const user = await Admin.findAll({
            where:{
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(!match) return res.status(400).json({msg:"Wrong Password"});
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const accessToken = jwt.sign({userId,name,email}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '20s'
        }); 
        const refreshToken = jwt.sign({userId,name,email}, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        }); 
        await Admin.update({refresh_token: refreshToken}, {
            where: {
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken)
    } catch (error) {
        res.status(404).json({msg: "Email tidak ditemukan"});
    }
}