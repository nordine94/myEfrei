const mongoose = require("mongoose")

const schema = mongoose.Schema({
    Note: Number
})

module.exports = mongoose.model("note", schema)