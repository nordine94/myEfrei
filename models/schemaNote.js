const mongoose = require("mongoose")

const NoteSchema = mongoose.Schema({
    Note: Number,   
})

const note = mongoose.model("note", NoteSchema)
module.exports = note