const express = require("express")
const router = express.Router()
const Classe = require("../models/schemaClasse")

// Creer une classe
router.post("/class", async (req, res) => {
	const classe = new Classe({
		Nom: req.body.nom
	})
	await classe.save()
	res.send(classe)
})

// Recuperer une classe
router.get("/class/:id", async (req, res) => {
	try{
		const classe = await Classe.findOne({_id: req.params.id})
		res.send(classe) 
	} catch {
		res.status(404)
		res.send({ error: "Cette classe n'èxiste pas"})
	}
})

// Recuperer et modifier une classe
router.patch("/class/:id", async (req, res) => {
	try{
		const classe = await Classe.findOneAndUpdate(
			{_id: req.params.id},
			{Nom: req.body.nom})
		await classe.save()
		res.send(classe)
		console.log("Changement prit en compte");
	} catch {
		res.status(404)
		res.send({ error: "Pas d'update !" })
	}
})

// Supprimer une classe
router.delete("/class/:id", async (req, res) => {
	try{
		await Classe.deleteOne({_id: req.params.id})
		res.status(204).send()
		console.log("Classe supprimer");
	} catch {
		res.status(404)
		res.send({ error: "Pas supprimé"})
	}
})

module.exports = router;