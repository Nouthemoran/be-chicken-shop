import Admin from "../models/AdminModel.js";
import bcrypt from "bcrypt";

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
    const salt = await bcrypt.genSalt();
    const 
}