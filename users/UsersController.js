const express = require("express");
const router = express.Router();
const User = require("./Users");

router.get("/admin/users/", (req,res) => {
    res.send("lista de users");
});

router.get("/admin/users/create", (req,res) => {
    res.render("admin/users/create");
});

router.get("/admin/users/login", (req,res) => {
    res.render("admin/users/login");
});



router.post("categories/save", (req,res) => {
    var title = req.body.title;
    if(title != undefined){
// salvar no DB carregando o model de categoria
        //Category.create({
        //  title: title,    
        //}).then(() => 
        //      res.redirect("/");
        // )
    }else{
        res.redirect("/admin/categories/new");
    }
});




module.exports = router;