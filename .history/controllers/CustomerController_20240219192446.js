import Customer from "../models/CustomerModel.js";

export const getCustomer = async(req, res) => {
    try {
        const response = await Customer.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
