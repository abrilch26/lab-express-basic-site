//1. IMPORTACIONES
const express = require ("express")
const { get } = require("http")
const app = express()
require("dotenv").config()

//2. MIDDLEWARES
app.use(express.static("public"))
app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

//3. RUTAS
app.get("/", (req, res) => {
    res.render("Home")
})

app.get("/works", (req, res) => {
    res.render("works")
})

app.get("/about", (req, res) => {
    res.render("about")
})


//4. SERVIDOR
app.listen(process.env.PORT, () => {
    console.log(`Servidor activo en puerto ${process.env.PORT}`)
})