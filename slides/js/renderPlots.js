$(document).ready(function(){

  $.getJSON( "slides/data/PostsFrequencies25.json", function(data) {
    var container1 =  new Highcharts.Chart({
      chart: {
          renderTo: 'container1',
          type: 'column'
      },
      title: {
          text: 'Post Activity',
          style: {
              fontSize: '20px'
          }
      },
      xAxis: {
          categories: data.categories,
          title: {
              text: "# of Posts",
              style: {
                  fontSize: '16px'
              }
          },
          labels: {
            style: {
                fontSize: '16px'
            }
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'User Count',
              align: 'high',
              style: {
                  fontSize: '16px'
              }
          },
          labels: {
              overflow: 'justify',
              style: {
                  fontSize: '14px'
              }
          }
      },
      tooltip: {
          valueSuffix: ' Users'
      },
      plotOptions: {
          bar: {
              dataLabels: {
                  enabled: true
              }
          }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 100,
          width: 200,
          floating: true,
          borderWidth: 1,
          backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
          shadow: true,
          itemStyle: {
               fontSize:'16px',
               font: '20pt Trebuchet MS, Verdana, sans-serif',
               color: '#A0A0A0'
          }
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Davita',
          data: data.countsDavita
      },{
        name: "KidneySpace",
        data: data.countsKidneySpace
      }]
    });
  });


      $.getJSON( "slides/data/MostFrequent.json", function(data) {

          data.synsetWords[17] = "peritoneal dialysis, pd";
          data.synsetWords[30] = "food";

          $('#container2').highcharts({
          chart: {
              type: 'bar'
          },
          title: {
              text: 'Most Frequent Synsets',
              style: {
                  fontSize: '20px'
              }
          },
          subtitle: {
              text: '(odered by number of words assigned to them)',
              style: {
                  fontSize: '18px'
              }
          },
          xAxis: {
              categories: data.synsetWords,
              title: {
                  text: "synset",
                  style: {
                     color: 'black',
                     fontWeight: 'bold',
                     fontSize: '16px',
                  }
              },
              labels: {
                  style: {
                     color: 'black',
                     fontSize: '14px',
                     fontWeight: 'bold'
                  }
              }
          },
          yAxis: {
              type: 'logarithmic',
              min: 80,
              title: {
                  text: 'count (log-scale)',
                  align: 'high',
                  style: {
                     color: 'black',
                     fontWeight: 'bold',
                     fontSize: '16px',
                  }
              },
              labels: {
                  overflow: 'justify',
                  style: {
                     color: 'black',
                     fontSize: '14px',
                     fontWeight: 'bold'
                  }
              }
          },
          tooltip: {
              valueSuffix: ''
          },
          plotOptions: {
              bar: {
                  dataLabels: {
                      enabled: false
                  }
              }
          },
          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'top',
              x: -40,
              y: 100,
              floating: true,
              borderWidth: 1,
              backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
              shadow: true,
              enabled: false
          },
          credits: {
              enabled: false
          },
          series: [{
              name: 'word count',
              data: data.wordCounts
          }]
      });
      });

});
