const mongoose = require("mongoose")

const schema = mongoose.Schema({
	Nom: String,
	Prenom: String
})

module.exports = mongoose.model("eleves", schema)