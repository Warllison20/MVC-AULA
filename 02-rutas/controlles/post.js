const express = require("express")
var router = express.Router();



router.get("/", (req, res) => {
    res.send("Pagina de Post")
})


module.exports = router