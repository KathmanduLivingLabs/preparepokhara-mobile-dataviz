var prepareMapData = function(data){
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
  var mapData = {
    annotations: mapAnnotations,
    attributes: featureAttributes
  }
  return mapData;
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
    return prepareMapData(json);
  })
}
