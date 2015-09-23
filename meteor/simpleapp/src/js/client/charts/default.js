
createDefaultChart = function(container, data, name, divName, color) {
  var chart = name + "Chart_" + data["name"]
  if(!container.hasOwnProperty(chart)) {
    container[chart] = getDefaultChartTemplate(color)
    createCanvas(chart, divName);
  }
  value = data[name]
  value = typeof value !== 'undefined' ? value : -1
  if (value == -1) return
  container[chart].labels.push(data["buildId"])
  container[chart].datasets[0].data.push(value)
}

createPopCharts = function(container, data){
  createDefaultChart(container, data, "pop", "#divChartPop", "rgba(220,220,0,1)")
  createDefaultChart(container, data, "popAvg", "#divChartPopAvg", "rgba(140,140,0,1)")
}

createLengthCharts = function(container, data){
  createDefaultChart(container, data, "lenMeters", "#divChartLen", "rgba(220,220,0,1)")
  createDefaultChart(container, data, "lenMetersAvg", "#divChartLenAvg", "rgba(140,140,0,1)")
}

createErrCharts = function(container, data){
  createDefaultChart(container, data, "ettFs", "#divChartEtt", "rgba(220,220,0,1)")
  createDefaultChart(container, data, "ettFsAvg", "#divChartEttAvg", "rgba(140,140,0,1)")
}