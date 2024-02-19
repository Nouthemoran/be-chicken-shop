import Makanan from "../models/MakananModel.js";

export const getMakanan = async(req, res) => {
    try {
        const response = await .findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
