const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const userRoutes = require("./routes/userRoutes");


require("dotenv").config()
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors({ origin: "*" }))
app.use("/users", userRoutes)


const port = process.env.PORT
const uri = process.env.MONGO_URI



const connect = async () => {
    try {
        mongoose.set("strictQuery", false)
        await mongoose.connect(uri)
        console.log("MongoDB connected")
    } catch (error) {
        console.log(error)
    }
}
connect()

app.listen("5003", () => {
    console.log("Server started")
})