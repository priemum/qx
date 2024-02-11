import { Router } from "express"
import qxClientModel from "./db.js"

const router = Router()

router.get("/mynameiskashifrazabbccddeeffgghhii", (req, res) => {
    qxClientModel.find({}).then(users => {
        res.render("index", { users })
    })
})

router.post("/add-member", (req, res) => {
    const { Ḻ, ḏ, ṗ, ẇ, f, b, M, username, userid, email, flag, custom, sigs, types } = req.body
    const letters = [Ḻ, ḏ, ṗ, ẇ, f, b, M]
    qxClientModel
        .create({ username, sigs, types, userid, email, flag, custom, letters })
        .then(_ => res.redirect("/mynameiskashifrazabbccddeeffgghhii"))
})

router.post("/delete-member", (req, res) => {
    const { id } = req.body
    qxClientModel.findOneAndDelete({ _id: id })
        .then(_ => res.redirect("/mynameiskashifrazabbccddeeffgghhii"))
})

router.post("/update-member", (req, res) => {
    const { Ḻ, ḏ, ṗ, ẇ, f, b, M, username, userid, email, flag, custom, id, types, sigs } = req.body
    const letters = [Ḻ, ḏ, ṗ, ẇ, f, b, M]
    qxClientModel
        .findOneAndUpdate({ _id: id }, { username, sigs, types, userid, email, flag, custom, letters })
        .then(_ => res.redirect("/mynameiskashifrazabbccddeeffgghhii"))
})

router.get("/data", (req, res) => {
    const type = decodeURIComponent(req.query.type)
    const id = req.query.id
    qxClientModel.findOne({ sigs: id }).then(user => {
        if (user) {
            if (user.letters.includes(type)) {
                if (type == "Ḻ") {
                    res.render("live", { id: user.userid, email: user.email, flag: user.flag, user: user.username })
                }
                else if (type == "ḏ") {
                    res.render("dash", { user: user.username, flag: user.flag })
                }
                else if (type == "ṗ") {
                    res.render("pay")
                }
                else if (type == "ẇ") {
                    res.render("win")
                }
                else if (type == "M") {
                    res.render("main_pc", { id: user.userid, email: user.email, flag: user.flag, user: user.username })
                }
                else if (type == "f") {
                    res.send(`F${user.email}`)
                }
                else if (type == "b") {
                    res.send("b")
                }
                else {
                    res.send(id)
                }
            }
            else {
                res.send(id)
            }
        }
        else {
            res.send(id)
        }
    })
})

export default router
