var async = require("async");

module.exports = {
  getData : function(data,callback){
    async.parallel({
      yearlyScore : function(cb){
        var years = {};
        for ( var i in data){
          var yr = data[i].date.split(' ')[2];
          if( years[yr] == undefined ){
            years[yr] = 0;
          }
          years[yr] += isNaN(parseInt(data[i].batting_score)) ? 0 : parseInt(data[i].batting_score);
        }
        // console.log(years);
        cb(null,years);
      },
      scoreAgainstTeam : function(cb){
        var team = {};
        for ( var i in data){
          var teamName = data[i].opposition.slice(1);
          if( team[teamName] == undefined ){
            team[teamName] = 0;
          }
          team[teamName] += isNaN(parseInt(data[i].batting_score)) ? 0 : parseInt(data[i].batting_score);
        }
        // console.log(team);
        cb(null,team);
      },
      winORloose : function(cb){
        var winCount = 0,lostCount = 0,tiedCount = 0,noresult = 0,obj = {};
        for (var i in data){
          if(data[i].match_result == 'lost'){
            lostCount ++;
          }else if (data[i].match_result == 'won') {
            winCount ++;
          }else if (data[i].match_result == 'tied') {
            tiedCount++;
          }else{
            noresult ++;
          }
        }
        obj["Winning matched count"] = winCount;
        obj["Lost matches count"] = lostCount;
        obj['Tied matches'] = tiedCount;
        obj['Matches with no result'] = noresult;
        cb(null,obj);
      }
    },function(err,results){
      console.log("async ", err, results.length);
      callback(results);
    });
  }
}
