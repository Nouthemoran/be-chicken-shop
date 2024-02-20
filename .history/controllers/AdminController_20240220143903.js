import Admin from "../models/AdminModel.js";

export const getUsers = async(req, res) => {
    try {
        const response = await Admin.findAll();
        res.status(200).json(response);    
    } catch (error) {
        console.log(error.message);
    }
}

export const register = async (req, res) => {
    const { }
}