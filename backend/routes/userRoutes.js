const userRoutes = require("express").Router()
const {register, viewUsers, SignIn} = require("../controllers/userController")

userRoutes.post("/register", register);
userRoutes.post("/SignIn", SignIn)
// userRoutes.get("/viewUsers", viewUsers);

module.exports = userRoutes