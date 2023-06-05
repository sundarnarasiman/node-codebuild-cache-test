var AWS = require('aws-sdk');


var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});

AWS.config.credentials = credentials;
AWS.config.region = "us-east-1";
//Configuring region in config file
//AWS.config.update({region: 'us-east-1'});

console.log(credentials);

/* This example lists all of the tables associated with the current AWS account and endpoint. */

// Create the DynamoDB service object
var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});


var params = {
};
dynamodb.listTables(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
  /*
  data = {
   TableNames: [
      "Forum", 
      "ProductCatalog", 
      "Reply", 
      "Thread"
   ]
  }
  */
});
