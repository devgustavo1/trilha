const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const connection = require ("./database/database");

const categoriesController = require("./categories/CategoriesController");
const skinsController = require("./skins/SkinsController");
const usersController = require("./users/UsersController");

app.set('view engine','ejs');

app.use(express.static('public'));


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/",categoriesController);
app.use("/",skinsController);
app.use("/",usersController);

app.get("/", (req,res) => {
    res.render("index");
})

app.listen(8080,() => {
    console.log("Servidor está rodando.")
}) 