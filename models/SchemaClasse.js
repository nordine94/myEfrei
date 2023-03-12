const mongoose = require("mongoose")



const ClasseSchema =   mongoose.Schema({	
	Nom: String,
	Eleve:[{ type: mongoose.Schema.Types.ObjectId, ref: "eleves"}]
})



const classe = mongoose.model("classe", ClasseSchema)
module.exports = classe