
createCanvas = function(name, divName) {
  createCustomCanvas(name, divName, "400", "400")
//  $(divName).append("<div class=\"divChartClass\"><br/><label for = " + name + ">" + name + "<br/><canvas id=\"" + name + "\" width=\"400\" height=\"400\"></canvas></label></div>");
}

createCustomCanvas = function(name, divName, height, width) {
//  console.log("createCanvas " + name)
   $(divName).append("<div class=\"divChartClass\"><br/><label for = " + name + ">" + name + "<br/><canvas id=\"" + name + "\" width=\"" + width + "\" height=\"" + height + "\"></canvas></label></div>");
}


clearCanvasDiv = function (divName) {
  $(divName).remove()
}