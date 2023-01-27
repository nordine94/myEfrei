const mongoose = require("mongoose")

const schema = mongoose.Schema({
	Nom: String,
	Prenom: String,
    Matiere: String,
    Note: Number
})

module.exports = mongoose.model("eleves", schema)