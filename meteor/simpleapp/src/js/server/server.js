var driver = new MongoInternals.RemoteCollectionDriver("mongodb://IP:PORT/name");

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

var collections = {}
getResultTemplate = function(size, memory, visited, timeMs){
  var template = {
    memoryMax : memory.slice(0, size),
    memoryMin : memory.slice(memory.length-size, memory.length),
    visitedMax : visited.slice(0, size),
    visitedMin : visited.slice(visited.length-size, visited.length),
    timeMsMax : timeMs.slice(0, size),
    timeMsMin : timeMs.slice(timeMs.length-size, timeMs.length),
  }
  return template
}


function getTop(massData) {
//  console.log("getTop")
  var result = []
  for (var i = 0 ; i < massData.length ; ++i) {
    temp = getTopTenSet(massData[i][1])
    result.push([massData[i][0], temp])
  }
  console.log(result)
  return result
}

function getTopTenSet(massData) {
//  console.log("getTopTenSet")
  previous = massData[1].cases
  current = massData[0].cases
  memory  = []
  visited = []
  timeMs  = []

  for (var i = 0 ; i < current.length ; ++i) {
          memory.push({od:current[i].od, val:current[i].mem - previous[i].mem})
          visited.push({od:current[i].od, val:current[i].vis - previous[i].vis})
          timeMs.push({od:current[i].od, val:current[i].timeMs - previous[i].timeMs})
  }
  memory.sort(function(a, b){return a.val-b.val;});
  visited.sort(function(a, b){return a.val-b.val;});
  timeMs.sort(function(a, b){return a.val-b.val;});
  result = getResultTemplate(5, memory, visited, timeMs);
  console.log("getTopTenSetAfter")
  return result;
}

function prepareComparisonData(massData) {

}

Meteor.startup(function() {
});

Meteor.methods({
  getChartData: function(collectionName) {
	// console.log("getChartData " + collectionName)
    if(!collections.hasOwnProperty(collectionName)) {
      collections[collectionName] = new Mongo.Collection(collectionName, { _driver: driver });
    }
//     console.log(collectionName)
    return collections[collectionName].find({}, {cases:0, sort: {build: 1}}).fetch();
  },
  getTopTen: function(collectionName, fieldName) { //instead of filed name specify with who you want to compare - which build number
      if(!collections.hasOwnProperty(collectionName)) {
        collections[collectionName] = new Mongo.Collection(collectionName, { _driver: driver });
      }
      data = collections[collectionName].find({}, {fields:{'name':1, '_id':0}}).fetch()
      var distinctData = _.uniq(data, false, function(d) {return d.name});
      scenarios = _.pluck(distinctData, "name")

      result = []
      for (var i = 0 ; i < scenarios.length ; ++i) {
        temp = collections[collectionName].find({$query:{name:scenarios[i]}, $orderby:{'buildId':-1}, $limit:2}).fetch();
        tempArray = [scenarios[i], temp.slice(0,2)]
        result.push(tempArray)
      }
    return getTop(result);
  },
  getScenarios: function(collectionName) {
      if(!collections.hasOwnProperty(collectionName)) {
        collections[collectionName] = new Mongo.Collection(collectionName, { _driver: driver });
      }
      data = collections[collectionName].find({}, {fields:{'name':1, '_id':0}}).fetch()
      var distinctData = _.uniq(data, false, function(d) {return d.name});
      scenarios = _.pluck(distinctData, "name")
      console.log(scenarios)
      return scenarios
  },
  getComparisonData: function(collectionName, selected) {
      console.log(selected)
      if(!collections.hasOwnProperty(collectionName)) {
        collections[collectionName] = new Mongo.Collection(collectionName, { _driver: driver });
      }

      result = []
      for (var i = 0 ; i < selected.length ; ++i) {
        temp = collections[collectionName].find({$query:{name:selected[i]}, $orderby:{'buildId':-1}, $limit:1}).fetch();
        tempArray = [selected[i], temp.slice(0,1)]
        result.push(tempArray)
      }
      console.log(result)
      return result
  }
});