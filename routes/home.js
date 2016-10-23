var express = require('express');

var app = new express();

var router = express.Router();

var Controller = require('./../Controllers/DataController');

var Converter = require("csvtojson").Converter;

router.get('/',function(req,res,next){
  var converter = new Converter({constructResult: true});
  converter.fromFile("sachin.csv",function(err,result){
    if(err == null){
      Controller.getData(result,function(response){
        // console.log(response.winORloose);
        res.render('socialcops/index.html',{
          data : result,
          yearlyScore : response.yearlyScore,
          scoreAgainstTeam : response.scoreAgainstTeam,
          winORloose : response.winORloose
        });
      });
    }else {
      res.send("Something went wrong");
    }
  });
});
module.exports = router;
