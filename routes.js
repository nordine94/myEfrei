const express = require("express")
const router = express.Router()
const Post = require("./models/schemas")

router.post("/posts", async (req, res) => {
	const post = new Post({
		Nom: req.body.nom,
		Prenom: req.body.prenom,
        Matiere: req.body.matiere,
        Note: req.body.note,
	})
	await post.save()
	res.send(post)
})

router.get("/posts/:id", async (req, res) => {
    try{
        const post = await Post.findOne({ _id: req.params.id })
	    res.send(post)
    } catch {
        res.status(404)
		res.send({ error: "Tu cherche qui ?!" })
    }	
})

router.patch("/posts/:id", async (req, res) => {
    try{
        const post = await Post.findOneAndUpdate(
            { _id: req.params.id },
            {Nom: req.body.nom,
            Prenom: req.body.prenom,
            Matiere: req.body.matiere, 
            Note: req.body.note})             
        await post.save()
	    res.send(post)
        console.log("Jong");
    } catch {
        res.status(404)
		res.send({ error: "T'as fais n'importe quoi !" })
    }
})

router.delete("/posts/:id", async (req, res) => {
    try {
		await Post.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Pas supprimé !" })
	}
})

module.exports = router;