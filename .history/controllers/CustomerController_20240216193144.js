import Cus from "../models/CustomerModel.js";

export const getKelas = async(req, res) => {
    try {
        const response = await Kelas.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
