import Customer from "../models/CustomerModel.js";

export const getCustomer = async(req, res) => {
    try {
        const response = await Customer.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const register = async (req, res) => {
    const { nama, alamausername, email, password, confPassword } = req.body;
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

