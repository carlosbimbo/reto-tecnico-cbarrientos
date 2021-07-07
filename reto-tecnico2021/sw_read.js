'use strict';
const axios = require('axios');
const URL_SW_API = 'https://swapi.py4e.com/api';
const resource_dict = {
  'personas': '/people',
  'planetas': '/planets'
}
const resource_list = ['personas', 'planetas'];
const CODE_200 = 200;
const CODE_404 = 404;
var message = {
  message: ''
};


module.exports.main = async event => {
	
  var resource = event.pathParameters ? event.pathParameters.resource : event.path;
  resource = resource.replace('/', '').trim();
  
  console.log(resource + ' testing....');
  
  let result = {
    statusCode: CODE_200,
    body: ''
  };
  if (resource_list.includes(resource) === true) {
    const sw_resource = resource_dict[resource];
    const sw_resource_url = URL_SW_API + sw_resource;
    console.log(sw_resource_url);
    const data = await axios.get(sw_resource_url)
    .then(({data}) => {
      return data
    })
	
    message.message = `consultando recurso ${sw_resource}`;
    message.message = data;
    result.body = JSON.stringify(data);
  } else {
    result.statusCode = CODE_404;
    message.message = `consultando recurso ${resource}`;
    message.data = event;
    result.body = JSON.stringify(message);
  }
  return result;
};
