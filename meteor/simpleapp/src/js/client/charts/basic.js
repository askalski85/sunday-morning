
createBasicChart = function(container, data){
    var chart = "basicChart_" + data["name"]
    if(!container.hasOwnProperty(chart)) {
      container[chart] = getBuildResultChartTemplate()
      createCanvas(chart, "#divChartBasic");
    }
    container[chart].labels.push(data["buildId"])
    container[chart].datasets[0].data.push(data["errors"])
    container[chart].datasets[1].data.push(data["failures"])
    container[chart].datasets[2].data.push(data["tests"])
}