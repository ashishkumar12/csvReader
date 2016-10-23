var _ = (function(){
  return{
    ScoreChart : function(Xlabels,Ylabels,chartType,canvas_id,dataLabel){
      var ctx = document.getElementById(canvas_id);
      var data = {
        labels: Xlabels,
        datasets: [
          {
            label: dataLabel,
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: Ylabels,
            spanGaps: true,
            fullWidth : true
          }
        ]
      };
      var myLineChart = new Chart(ctx, {
        type: chartType,
        data: data,
        options: {
          responsive: true
        }
      });
    },
    pieChart : function(labels,datavalues){
      var ctx = document.getElementById('myChart3');
      var data = {
        labels: labels,
        datasets: [
          {
            data: datavalues,
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ]
          }]
        };
        var myPieChart = new Chart(ctx,{
          type: 'doughnut',
          data: data,
          options: {
            // responsive : true
          }
        });
      },
      calculateTeamScore : function(){
        var year_array = [];
        var year_score_array = [];
        for(obj in scoreAgainstTeam){
          if(year_array.indexOf(obj) <= -1){
            year_array.push(obj);
          }
          if(year_score_array.indexOf(scoreAgainstTeam[obj]) <= -1){
            year_score_array.push(scoreAgainstTeam[obj]);
          }
        }
        _.ScoreChart(year_array,year_score_array,"bar","myChart","Sachin Tendulkar's score against other countries");
      },
      calculateYearlyScore : function(){
        var year_array = [];
        var year_score_array = [];
        for(obj in yearlyScore){
          if(year_array.indexOf(obj) <= -1){
            year_array.push(obj);
          }
          if(year_score_array.indexOf(yearlyScore[obj]) <= -1){
            year_score_array.push(yearlyScore[obj]);
          }
        }
        _.ScoreChart(year_array,year_score_array,"line","myChart2","Sachin Tendulkar's yearly score ");
      },
      calculateChanceTo : function(){
        var arr1 = [];
        var arr2 = [];
        for(var i in chance_to){
          arr1.push(i);
          arr2.push(chance_to[i]);
        }
        // console.log(arr1,arr2);
        _.pieChart(arr1,arr2);
      }
    }
  })();
  _.calculateTeamScore();
  _.calculateYearlyScore();
_.calculateChanceTo();
