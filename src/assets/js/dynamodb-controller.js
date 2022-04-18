const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
});

const DynamoDB = new AWS.DynamoDB();

function addLoad(title, rtScore) {
  const params = {
    TableName: "booster_dynamo",
    Item: {
      entry: { S: entry }
    },
  };

  DynamoDB.putItem(params, function(err) {
    if (err) {
      console.error("Could not write to log.", err);
    } else {
      console.log(`${title} logged and loaded.`);
    }
  });
}

module.exports = {
  addLoad,
};

