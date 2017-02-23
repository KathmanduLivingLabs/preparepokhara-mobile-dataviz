var prepareMapData = function(data, type){
  console.log(data);
  mapFeatures = data.geojson.features;
  mapAnnotations = [];
  featureAttributes = [];
  mapFeatures.forEach( function (feature){
    var annotation = {
      coordinates: [feature.geometry.coordinates[1],feature.geometry.coordinates[0]],
      type: 'point',
      title: feature.properties.tags.name,
      subtitle: 'Tap the popup for details, tap anywhere else on the map to dismiss',
      id: feature.id,
      rightCalloutAccessory: {
        source: {
          uri: 'http://findicons.com/files/icons/1786/oxygen_refit/128/view_details.png'
        },
        height: 25,
        width:25
      }
    }
    var attribute = {
      coordinates: [feature.geometry.coordinates[1],feature.geometry.coordinates[0]],
      type: 'point',
      id: feature.id,
      tags: feature.properties.tags
    }
    mapAnnotations.push(annotation);
    featureAttributes.push(attribute);
  });

  var stats = prepareStats(data.stats, type);
  

  var mapData = {
    annotations: mapAnnotations,
    attributes: featureAttributes,
    stats: stats
  }
  return mapData;
}

var prepareStats = function(stats, type){
  switch (type){
    case 'hospital' : 
      var selectedHospital = stats.selection.total;
      var totalHospital = stats.overall.total;
      var percentHospital = stats.insights.total;
      var selectedBedCapacity = stats.selection['Bed Capacity'];
      var totalBed=stats.overall['Bed Capacity'];
      var percentBed=stats.insights['Bed Capacity'];
      var selectedPersonnel=stats.selection['Personnel Count'];
      var totalPersonnel=stats.overall['Personnel Count'];
      var percentPersonnel=stats.insights['Personnel Count'];
      var hospitalstats = { hospital: [selectedHospital,totalHospital,percentHospital], bed:[selectedBedCapacity,totalBed,percentBed], personnel:[selectedPersonnel, totalPersonnel, percentPersonnel]}
    return(hospitalstats);
    break;

    case 'school' :
      var selectedSchool = stats.selection.total;
      var totalSchool = stats.overall.total;
      var percentSchool = stats.insights.total;
      var selectedStudents = stats.selection.Students;
      var totalStudents=stats.overall.Students;
      var percentStudents=stats.insights.Students;
      var selectedPersonnel=stats.selection['Personnel Count'];
      var totalPersonnel=stats.overall['Personnel Count'];
      var percentPersonnel=stats.insights['Personnel Count'];
      var schoolstats = { school: [selectedSchool,totalSchool,percentSchool], students:[selectedStudents,totalStudents,percentStudents], personnel:[selectedPersonnel, totalPersonnel, percentPersonnel]}
    return(schoolstats);
    break;

    case 'bank' :
      var selectedBank = stats.selection.total;
      var totalBank = stats.overall.total;
      var percentBank = stats.insights.total;
      var selectedBankwithAtm = stats.selection.ATM; 
      var totalBankwithAtm = stats.overall.ATM;
      var percentBankwithAtm = stats.insights.ATM;
      var bankstats = { bank: [selectedBank, totalBank, percentBank], atm: [selectedBankwithAtm, totalBankwithAtm, percentBankwithAtm]}
    return(bankstats);
    break;

    default :
    return 'NA';
  }
}

module.exports = function(amenity,ward_id,filters, variables){
  var baseURL = 'http://api-preparepokhara.herokuapp.com/api/v1/features';
  var type = amenity;
  var ward = ward_id;
  var filters = encodeURIComponent(JSON.stringify(filters));
  var variables = encodeURIComponent(JSON.stringify(variables));
  var url = `${baseURL}?type=${type}&ward=${ward}&filters=${filters}&variables=${variables}`;
  console.log(url);
  return fetch(url).then(function(response){
    return response.json()
  }).then(function(json){
    return prepareMapData(json, type);
  })
}

