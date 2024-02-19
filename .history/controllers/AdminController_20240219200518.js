import Admin from "../models/AdminModel";

export const getUsers = async(req, res) => {
    try {
        const users = await Admin.findAll();
        res.status(200).json(response);    
    } catch (error) {
    }
}