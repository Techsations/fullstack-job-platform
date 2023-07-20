const userRoutes = require("express").Router()
const {register, viewUsers, login} = require("../controllers/userController")

userRoutes.post("/register", register);
userRoutes.post("/login", login)
// userRoutes.get("/viewUsers", viewUsers);

module.exports = userRoutesrs