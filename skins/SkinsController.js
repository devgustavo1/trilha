const express = require("express");
const router = express.Router();
const request = require('request');

router.get("/admin/skins", (req,res) => {
    var options = {
        'method': 'GET',
        'url': 'https://trilha-ies.herokuapp.com/skin'
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(JSON.parse(response.body))
        res.render("admin/skins/index", {skins: JSON.parse(response.body)})
    });
});


router.get("/admin/skins/new", (req,res) => {
    var options = {
        'method': 'GET',
        'url': 'https://trilha-ies.herokuapp.com/category'
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(JSON.parse(response.body))
        res.render("admin/skins/new", {categories: JSON.parse(response.body)})
    });
});

router.post("/admin/skins/save", (req,res) => {
    var options = {
        'method': 'POST',
        'url': 'https://trilha-ies.herokuapp.com/skin',
        'headers': {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: req.body.name,
            imageUrl: 'teste',
            categoryId: req.body.categoryId,
            price: req.body.price
        })
      
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        res.redirect("/admin/skins");
      });
      
});

router.post("/admin/skin/delete", (req,res) => {
    var options = {
        'method': 'DELETE',
        'url': 'https://trilha-ies.herokuapp.com/skin/'+req.body.id,
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        res.redirect("/admin/skins/");
    });
});

module.exports = router;