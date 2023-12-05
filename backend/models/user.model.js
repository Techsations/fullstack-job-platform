const mongoose = require("mongoose")
const bcryptjs = require("bcryptjs")


// EmployerSchema
const employerSchema = new mongoose.Schema({
    employerName: { type: String, required: true, trim: true, unique: true },
    email: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    timestamp: { type: String, required: true },
    inbox: {
        readMsg: [
            {
                sender: { type: String }, // Sender's name or ID
                message: { type: String },
                timestamp: Date,
            }
        ],
        unreadMsg: [
            {
                sender: { type: String }, // Sender's name or ID
                message: { type: String },
                timestamp: Date,
            }
        ]
    }
})


// UserSchema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, trim: true},
    email: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    timestamp: { type: String, required: true },
    skills: { type: [] }
})

let saltRound = 10
userSchema.pre("save", function (next) {
    if(this .password != undefined) {
        bcryptjs.hash(this.password, saltRound).then((hashed)=>{
            this.password = hashed
            next()
        }).catch((error)=>{
            console.log(error);
        })
    }
})


const userModel = mongoose.models.user_tbs || mongoose.model("user_tbs", userSchema)

module.exports = userModel