const userModel = require("../models/user.model")
const bcryptjs = require("bcryptjs")
const { generateToken, verifyToken } = require("../services/sessions")


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
        sendMessage(email)
        return res.status(201).send({ message: "Registration Successful", status: true })
    } catch (error) {
        next(error)
    }
}