const cloudinary = require("cloudinary");

const CLOUD_NAME = "dmjtytstd";
const API_KEY = "216288979336725";
const API_SECRET = "MJufkalWaCALwEvLyXT7cd-48hY";


cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET
})

exports.uploads = (file, folder) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file,(result) => {
            resolve({
                url: result.url,
                id: result.public_id

            })
        },
            {
                resource_type: "auto",
                folder: folder
            }
        )
    })
}