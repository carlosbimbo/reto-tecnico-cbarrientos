
'use strict';
const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');
const DDB = new AWS.DynamoDB({apiVersion: '2012-08-10'});

module.exports.main = (event, context, callback) => {
  const entity = event.body ? JSON.parse(event.body) : event;
  const persona_uuid = uuidv4();
  
  var params = {
    TableName: 'personTable',
    Item: {
      'persona_uuid': {S: persona_uuid},
      'nombre': {S: entity.name},
      'altura': {N: entity.height},
      'peso': {N: entity.mass},
      'color_cabello': {S: entity.hair_color},
      'color_piel': {S: entity.skin_color}
    }
  };
  
  DDB.putItem(params, function(err, data) {
    if (err) {
      callback(true, {
        statusCode: 404,
        body: JSON.stringify(err),
      });
    } else {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(params.Item),
      });
    }
  });

};
