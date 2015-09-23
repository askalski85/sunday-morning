
chartColorPalette = [
  "rgba(220,0,0,1)",
  "rgba(220,220,0,1)",
  "rgba(220,0,220,1)",
  "rgba(220,220,220,1)",
  "rgba(0,0,0,1)",
  "rgba(0,0,220,1)",
  "rgba(0,220,0,1)",
  "rgba(0,220,220,1)",
  "rgba(120,0,0,1)",
  "rgba(120,120,0,1)",
  "rgba(120,0,120,1)",
  "rgba(120,120,0,1)",
  "rgba(0,120,0,1)",
  "rgba(0,0,120,1)",
  "rgba(0,120,120,1)",
  "rgba(60,0,0,1)",
  "rgba(60,60,0,1)",
  "rgba(60,0,60,1)",
  "rgba(60,60,60,1)",
  "rgba(0,60,0,1)",
  "rgba(0,0,60,1)",
  "rgba(0,60,60,1)"
]

getBuildResultChartTemplate = function(){
  var template = {
    labels : [],
    datasets : [
      {
        strokeColor: "rgba(220,0,0,1)",
        pointColor: "rgba(220,0,0,1)",
        data : []
      },
      {
        strokeColor: "rgba(0,0,220,1)",
        pointColor: "rgba(0,0,220,1)",
        data : []
      },
      {
        strokeColor: "rgba(0,220,0,1)",
        pointColor: "rgba(0,220,0,1)",
        data : []
      }
    ]
  }
  return template
}

getCompare2ChartTemplate = function(){
  var template = {
    labels : [],
    datasets : [
      {
        strokeColor: "rgba(220,0,0,1)",
        pointColor: "rgba(220,0,0,1)",
        data : []
      },
      {
        strokeColor: "rgba(0,0,220,1)",
        pointColor: "rgba(0,0,220,1)",
        data : []
      }
    ]
  }
  return template
}

getCustomChartTemplate = function(size) {
  var template = {
    labels : [],
    datasets : []
  }

  for ( var i = 0 ; i < size ; ++i) {
    template.datasets.push({strokeColor:chartColorPalette[i], pointColor:chartColorPalette[i], data:[]})
  }
  return template
}

getDefaultChartTemplate = function(color){
  color = typeof color !== 'undefined' ? color : "rgba(220,220,0,1)"
  var template = {
    labels : [],
    datasets : [
      {
        strokeColor: color,
        pointColor: color,
        data : []
      }
    ]
  }
  return template
}