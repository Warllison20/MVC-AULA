const express = require("express")
var router = express.Router();


router.get("/contr", (req, res) => {
    res.send("Pagina de controles")
})



module.exports = router