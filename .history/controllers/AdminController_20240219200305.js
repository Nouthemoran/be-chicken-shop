import Admin from "../models/AdminModel";

const getUsers = async(req, res) => {
    try {
        const users = await Admin.findAll();
        res.json(users);
    } catch 
}