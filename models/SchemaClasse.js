const mongoose = require("mongoose")

const schema = mongoose.Schema({
	Nom: String
})

module.exports = mongoose.model("classe", schema)