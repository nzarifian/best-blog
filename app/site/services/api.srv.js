app.service('api', ApiService);

function ApiService($http) {
  this.http = $http;
  //constants
  this.BASE_URL = 'http://localhost:8080/api';
}
ApiService.prototype.request = function(endpoint,data,method) {

  //build request
  if(method == 'POST'){
    data = JSON.stringify(data);
    return this.http.post(this.BASE_URL + endpoint,data)
  }
  else if(method == 'GET'){
    return this.http.get(this.BASE_URL + endpoint);
  }
  else if(method == 'PUT'){
    data = JSON.stringify(data);
    return this.http.put(this.BASE_URL + endpoint,data);
  }
  else if(method == 'DEL'){
    return this.http.delete(this.BASE_URL + endpoint);
  }

};
