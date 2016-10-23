var express = require('express');

var app = new express();

var router = express.Router();

var Controller = require('./../Controllers/DataController');

var Converter = require("csvtojson").Converter;
var converter = new Converter({});

router.get('/',function(req,res){
  converter.fromFile("sachin.csv",function(err,result){
    Controller.getData(result,function(response){
      // console.log(response.winORloose);
      res.render('socialcops/index.html',{
        data : result,
        yearlyScore : response.yearlyScore,
        scoreAgainstTeam : response.scoreAgainstTeam,
        winORloose : response.winORloose
      });
    });
  });
});
module.exports = router;
