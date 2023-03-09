const express = require("express")
const router = express.Router()
const Eleve = require("../models/schemaEleve")

// Creer un eleve
router.post("/eleves", async (req, res) => {
	const eleve = new Eleve({
		Nom: req.body.nom,
		Prenom: req.body.prenom,
	})
    await eleve.save()
	res.send(eleve)
})

// Recuperer un eleve
router.get("/eleves/:id", async (req, res) => {
    try{
        const eleve = await Eleve.findOne({ _id: req.params.id })
	    res.send(eleve)
    } catch {
        res.status(404)
		res.send({ error: "Tu cherche qui ?!" })
    }	
})

// Recuperer et modifier les donnees d'un eleve
router.patch("/eleves/:id", async (req, res) => {
    try{
        const eleve = await Eleve.findOneAndUpdate(
            { _id: req.params.id },
            {Nom: req.body.nom,
            Prenom: req.body.prenom})             
        await eleve.save()
	    res.send(eleve)
        console.log("Changement prit en compte");
    } catch {
        res.status(404)
		res.send({ error: "Pas d'update !" })
    }
})

// Supprimer un eleve
router.delete("/eleves/:id", async (req, res) => {
    try {
		await Eleve.deleteOne({ _id: req.params.id })
		res.status(204).send()
        console.log("Eleve supprimé");
	} catch {
		res.status(404)
		res.send({ error: "Pas supprimé !" })
	}
})

module.exports = router;