  //    axios.get('http://docs.threadgenius.co/#public-catalogs?key_NTNiOTMzZDViNzRhZmNmZjQxNTdkOWM1YjQxOGJj')

  function GetItems(){
    axios.get('./../response-data-export.json')
    .then(function (response) {
      console.log(response);
      //Items = response.response.results
      Items = response
    })
    .catch(function (error) {
      console.log(error);
    });
}

export  default Items = GetItems();

