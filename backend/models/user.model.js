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

// Employer Password encrypt
let saltRound = 10
employerSchema.pre("save", function (next) {
    if (this.password != undefined) {
        bcryptjs.hash(this.password, saltRound).then((hashed) => {
            this.password = hashed
            next()
        }).catch((error) => {
            console.log(error, 33);
        })
    }
})


// User password encryption
userSchema.pre("save", function (next) {
    if(this .password != undefined) {
        bcryptjs.hash(this.password, saltRound).then((hashed)=>{
            this.password = hashed
            next()
        }).catch((error)=>{
            console.log(error, 33);
        })
    }
})


// Employer job posting schema
const postedJobsSchema = new mongoose.Schema({
    jobTitle: { type: String },
    email: { type: String },
    jobDescription: { type: String },
    timestamp: { type: String },
    salaryType: { type: String },
    min_salary: { type: Number, trim: true },
    max_salary: { type: Number, trim: true },
    jobType: { type: String },
    requiredSkills: { type: [] },
    author: { type: String }
})

// Job Application Schema
const jobApplicationsSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    userEmail: { type: String, unique: true },
    cv_url: { type: String },
    timestamp: { type: String },
    jobID: {type: String}
})


const employerModel = mongoose.models.employer_tbs || mongoose.model("employer_tbs", employerSchema)

const userModel = mongoose.models.user_tbs || mongoose.model("user_tbs", userSchema)

module.exports = userModel