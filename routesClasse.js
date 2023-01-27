const express = require("express")
const router = express.Router()
const Post = require("./models/schemaClasse")


router.post("/Class", async (req, res) => {
	const post = new Post({
		Nom: req.body.nom
	})
	await post.save()
	res.send(post)
})

module.exports = router;