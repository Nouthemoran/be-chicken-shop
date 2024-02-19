import Admin from "../models/AdminModel";

export const getUsers = async(req, res) => {
    try {
        const users = await Admin.findAll();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}