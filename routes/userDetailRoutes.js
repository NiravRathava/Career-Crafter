import express from "express"


const router= express.Router()
router.route("/:id").post().get().put().delete()