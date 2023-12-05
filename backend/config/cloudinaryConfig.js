const cloudinary = require ("cloudinary").v2

cloudinary.config({
    // cloud_name: process.env.CLOUD_NAME,
    // api_key: process.env.CLOUD_API_KEY,
    // api_secret: process.env.CLOUDINARY_API_SECRET

    cloud_name: 'techsations', 
    api_key: '516396577259229',
    api_secret: '***************************'
})

module.exports = {cloudinary}