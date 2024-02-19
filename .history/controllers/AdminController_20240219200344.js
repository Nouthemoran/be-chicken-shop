import Admin from "../models/AdminModel";

exconst getUsers = async(req, res) => {
    try {
        const users = await Admin.findAll();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}