const mongoose = require("mongoose")




const EleveSchema =  mongoose.Schema({ 
	Nom:  String,
	Prenom: String,
    Classe: [{ type: mongoose.Schema.Types.ObjectId, ref:"classe"}]
  })


const eleve = mongoose.model("eleves", EleveSchema)

module.exports = eleve