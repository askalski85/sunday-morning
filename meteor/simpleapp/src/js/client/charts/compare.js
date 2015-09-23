
createCompareCharts = function(container, data, name){
  createCustomCompareChart(container, data, name, "mem")
  createCustomCompareChart(container, data, name, "pop")
  createCustomCompareChart(container, data, name, "vis")
  createCustomCompareChart(container, data, name, "timeMs")
  createCustomCompareChart(container, data, name, "lenMeters")
  createCustomCompareChart(container, data, name, "ettFs")
}

createCustomCompareChart = function(container, data, name, specifier) {
    var chart = specifier + "_" + name
    var scenariosCount = data.length
    var casesCount = data[0][1][0].cases.length
    var chartWidth = (casesCount < 50) ? "400" : (casesCount * 20).toString()
    var chartHeight = (casesCount < 50) ? "400" : "800"

    if(!container.hasOwnProperty(chart)) {
      container[chart] = getCustomChartTemplate(scenariosCount)
      createCustomCanvas(chart, "#comparisonContainer", chartHeight, chartWidth);
    }

    for (var i = 0 ; i < casesCount ; ++i) {
      container[chart].labels.push(data[0][1][0].cases[i].od)
      var label = data[0][1][0].cases[i].od
      for (var j = 0 ; j < scenariosCount ; ++j) {
        if (data[j][1][0].cases[i].od == label) { //security lock for new od entries not at the end of the file
          container[chart].datasets[j].data.push(data[j][1][0].cases[i][specifier])
        }
      }
    }
}