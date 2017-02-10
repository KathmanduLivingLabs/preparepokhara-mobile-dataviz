module.exports = function(){
  var url = `http://api-preparepokhara.herokuapp.com/api/v1/wards`;
  return fetch(url).then(function(response){
    return response.json()
  }).then(function(json){
    return json.metrics.wards
  })
}
