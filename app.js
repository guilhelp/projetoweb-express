const express = require("express")
const app = express();
const port = 8081

// npm install express-handlebars --save
// configuração do handlebars
const handlebars = require("express-handlebars").engine
app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.get("/", function(req, res) {
    res.render("cadastrar")
})

app.get("/cadastrar", function(req, res) {
    res.render("cadastrar")
})

app.get("/consultar", function(req, res) {
    res.render("consultar")
})

app.get("/atualizar", function(req, res) {
    res.render("atualizar")
})

app.listen(port, function() {
    console.log("Servidor rodando na porta " + port)
}) 