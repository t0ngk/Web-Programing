const express = require("express");
const router = express.Router();
var article = require("../json/article-db");

router.get("/", function (req, res, next) {
  var searchFilter = req.query.search;
  if (searchFilter) {
    var getarticle = article.filter(function (article) {
      return (
        article.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
        article.author.toLowerCase().includes(searchFilter.toLowerCase())
      );
    });
  } else {
    var getarticle = article;
  }
  var data = { article: getarticle };
  res.render("index", data);
});

router.get("/blog/:id", function (req, res, next) {
  var id = req.params.id;
  var getArticle = article.find(function (article) {
    return article.id == id;
  });
  var data = { article: getArticle };
  res.render("detail", data);
});

module.exports = router;
