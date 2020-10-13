const express = require("express");
const router = express.Router();
const Category = require("./Category");
const request = require('request');

router.get("/admin/categories/", (req,res) => {
    var request = require('request');
    var options = {
        'method': 'GET',
        'url': 'https://trilha-ies.herokuapp.com/category'
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.render("admin/categories/index", {categories: JSON.parse(response.body)})
    });
});

router.get("/admin/categories/new", (req,res) => {
    res.render("admin/categories/new");
});

router.get("/admin/categories/edit/:categoryId", (req,res) => {
    var options = {
        'method': 'GET',
        'url': 'https://trilha-ies.herokuapp.com/category/' + req.params.categoryId
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(JSON.parse(response.body))
        res.render("admin/categories/edit", {category: JSON.parse(response.body)})
    });
});

router.post("/categories/save", (req,res) => {
    var options = {
        'method': 'POST',
        'url': 'https://trilha-ies.herokuapp.com/category',
        'headers': {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
      
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
      });
      
    res.redirect("/admin/categories/new");
});

router.post("/categories/edit/:id", (req,res) => {
    var options = {
        'method': 'PUT',
        'url': 'https://trilha-ies.herokuapp.com/category/' + req.params.id,
        'headers': {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
      
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        res.redirect("/admin/categories/");
      });
});

router.post("/categories/delete", (req,res) => {
    var request = require('request');
    var options = {
        'method': 'DELETE',
        'url': 'https://trilha-ies.herokuapp.com/category/'+req.body.id,
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        res.redirect("/admin/categories/");
    });
});


module.exports = router;