const express = require("express")
const router = require("./controlles/carrinhoControlr")
const postRouter = require("./controlles/post")

const app = express();
const port = 3000


app.use("/", router);
app.use("/P", postRouter)
router.get("/", (req, res) => {
    res.send("Pagina Inicial")
})

app.listen(port, () => console.log(`Servidor rodando com acesso na porta ${port}`))