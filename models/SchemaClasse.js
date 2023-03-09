const mongoose = require("mongoose")
const { Schema } = mongoose;


const ClasseSchema = mongoose.Schema({
	_id: Schema.Types.ObjectId,
	Nom: String,
})



const classe = mongoose.model("classe", ClasseSchema)
module.exports = classe