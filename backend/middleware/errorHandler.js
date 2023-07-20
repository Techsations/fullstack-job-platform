const jwt = require ("jsonwebtoken")
const errorHandler = (error, req, res) => {
    console.log(error);
    if(error.name === "AuthenticatonError"){
        return res.status(401).send({ message: error.message} || "Authentication Error")
    } else if(error.name = "MongoError"){
        if(error.code = 11000){
            return res.status(400).send({message: "Duplicate key error. A value inputed already exists in the database"})
        }
    } else if(error instanceof jwt.JsonWebTokenError){
        return res.status(401).send({message: error.message || "Authentication error"})
    } else if (error.name === "TokenGenerationError") {
        res.status(500).send({message: error.message || "Authentication error 2"})
    } else {
        res.status(500).send({message: "Internal server error"})
    }
    next ()
}

module.exports = {errorHandler}