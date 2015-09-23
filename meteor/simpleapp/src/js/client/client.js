function clearAll() {
  clearStatisticsDiv(".divStatisticsClass")
  clearCanvasDiv(".divChartClass")
}


function addTopTenCell(name, scenario) {
  $("#container_" + scenario).append("<div class=\"topTenCell\"><h5>" + name + "  </h5><table border=\"1\" id=\"" + name + "_" + scenario + "\" style=\"width:100%\"></table></div>")
}

function addTopTenContainer(scenario) {
  $("#divStatisticsContainer").append("<div class=\"topTenContainer\" id=\"container_" + scenario + "\"></div>")
}

function closeTopTenContainer(scenario) {
  $("#container_" + scenario).append("<p>" + scenario + "</p><div class=\"clear\"></div><hr>")
}

function drawTopTen(massData){
  $(".topTenContainer").remove()
  for (var i = 0 ; i < massData.length ; ++i) {
    addTopTenContainer(massData[i][0])
    addTopTenContent(massData[i][1], massData[i][0])
  }
}

function addTopTenContent(massData, scenario){
//  $("#divStatisticsContainer").append("<div class=\"topTenContainer\"><div class=\"clear\"></div><hr>" + name + "</caption>")
  addTopTenCell("maxMem", scenario)
  addTopTenCell("minMem", scenario)
  addTopTenCell("maxVis", scenario)
  addTopTenCell("minVis", scenario)
  addTopTenCell("maxTimeMs", scenario)
  addTopTenCell("minTimeMs", scenario)
  for (var i = 0 ; i < massData.memoryMax.length ; ++i) {
      if (massData.memoryMax[i].val != 0) $("#maxMem_" + scenario).append("<tr class=\"topTenRow\"><td>" + massData.memoryMax[i].od + "</td><td>" + massData.memoryMax[i].val + "</td></tr>");
      if (massData.memoryMin[i].val != 0) $("#minMem_" + scenario).append("<tr class=\"topTenRow\"><td>" + massData.memoryMin[i].od + "</td><td>" + massData.memoryMin[i].val + "</td></tr>");
      if (massData.visitedMax[i].val != 0) $("#maxVis_" + scenario).append("<tr class=\"topTenRow\"><td>" + massData.visitedMax[i].od + "</td><td>" + massData.visitedMax[i].val + "</td></tr>");
      if (massData.visitedMin[i].val != 0) $("#minVis_" + scenario).append("<tr class=\"topTenRow\"><td>" + massData.visitedMin[i].od + "</td><td>" + massData.visitedMin[i].val + "</td></tr>");
      if (massData.timeMsMax[i].val != 0) $("#maxTimeMs_" + scenario).append("<tr class=\"topTenRow\"><td>" + massData.timeMsMax[i].od + "</td><td>" + massData.timeMsMax[i].val + "</td></tr>");
      if (massData.timeMsMin[i].val != 0) $("#minTimeMs_" + scenario).append("<tr class=\"topTenRow\"><td>" + massData.timeMsMin[i].od + "</td><td>" + massData.timeMsMin[i].val + "</td></tr>");
  }
  closeTopTenContainer(scenario)
}

function drawChartClient(massData){
//  console.log("drawChartClient")
  var charts = {};
  clearAll()

  for (var i = 0 ; i < massData.length ; ++i) {
    createBasicChart(charts, massData[i])
    createMemoryCharts(charts, massData[i])
    createVisitedCharts(charts, massData[i])
    createTimeCharts(charts, massData[i])
    createPopCharts(charts, massData[i])
    createLengthCharts(charts, massData[i])
    createErrCharts(charts, massData[i])
  }

  Object.getOwnPropertyNames(charts).forEach(function(val, idx, array) {
    var ctx = $("#" + val).get(0).getContext("2d");
    var myNewChart = new Chart(ctx).Line(charts[val], {
      datasetFill: false,
	  animation: false
    });

  })
}

/** Get scenario names only for that */
function createCompareForms(massData) {
  console.log(massData)
  $("#comparisonForm").remove()
  $("#comparisonFormContainer").append("<form id=\"comparisonForm\"></form>")
  for (var i = 0 ; i < massData.length ; ++i) {
      var newElement = "<p style=\"color:" + chartColorPalette[i] + "\"><input class=\"comparisonCheck\" id=\"input_" + massData[i] + "\" style=\"color:" + chartColorPalette[i] + "\" type=\"checkbox\" unchecked name=\"" + massData[i] + "\">" + massData[i] + "</p>"
      $("#comparisonForm").append(newElement)
  }
}

function drawComparisonChart(massData){
  $(".divChartClass").remove()
//  createCompareForms(massData)

  /** get all data for selected scenarios on submit action */
  var charts = {};
  createCompareCharts(charts, massData, Session.get("jobName"))

  Object.getOwnPropertyNames(charts).forEach(function(val, idx, array) {
    var ctx = $("#" + val).get(0).getContext("2d");
    var myNewChart = new Chart(ctx).Line(charts[val], {
      datasetFill: false,
          animation: false
    });
  })
}

Template.comparisonChart.events({
  "click input": function (event) {
    Session.set("comparisonCheck", event.target.name);
    console.log(event.target.name)
    var selected = [];
    $('#comparisonForm input:checked').each(function() {
        selected.push($(this).attr('name'));
    });
    console.log(selected)
    Meteor.call("getComparisonData", Session.get("jobName"), selected, function(error, result) {
//      console.log(result)
      drawComparisonChart(result)
    });
  }
})

Template.chart.helpers({
  test: function(message) {
    console.log(message)
    console.log(Session.get("jobName"))
    Meteor.call("getChartData", Session.get("jobName"), function(error, result) {
      drawChartClient(result);
    });
    Meteor.call("getTopTen", Session.get("jobName"), function(error, result) {
      drawTopTen(result);
    });
  }
});

Template.comparisonChart.helpers({
  test: function(message) {
    console.log(message)
    clearAll()
    Meteor.call("getScenarios", Session.get("jobName"), function(error, result) {
      createCompareForms(result)
    });
  }
});

Template.registerHelper("setJobName", function (jobName) {
//   console.log(jobName)
  Session.set("jobName", jobName);
});

Template.registerHelper("getJobName", function () {
  return Session.get("jobName");
});