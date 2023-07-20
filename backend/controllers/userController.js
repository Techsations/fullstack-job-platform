const userModel = require("../models/user.model")
const bcryptjs = require("bcryptjs")
// const { generateToken, verifyToken } = require("../services/sessions")


const register = async (req, res, next) => {
    try {
        let { userName, email, password } = req.body
        const newUser = new userModel({
            userName,
            email,
            password
        })

        const result = await newUser.save()
        console.log(result)
        
        return res.status(201).send({ message: "Registration Successful", status: true })
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: "Registration failed." });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).send({ message: "User not Found", status: false })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        // const token = generateToken(email)
        if (isMatch) {
            return res.status(200).send({ message: `Welcome, ${user.userName}`, status: true, })
        }
        return res.status(401).send({ message: "Invalid Password", status: false })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {register, login}