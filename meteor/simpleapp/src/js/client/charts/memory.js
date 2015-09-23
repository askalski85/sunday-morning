
createMemoryCharts = function(container, data){
  createDefaultChart(container, data, "mem", "#divChartMemory", "rgba(220,220,0,1)")
  createDefaultChart(container, data, "memAvg", "#divChartMemoryAvg", "rgba(140,140,0,1)")
}