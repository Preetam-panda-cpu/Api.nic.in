//create Post Schema
const { Schema, model } = require("mongoose");

const postSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    details: {
        type: String,
        require: true,
    }
}, { timestamps: true });

module.exports = model('posts', postSchema)