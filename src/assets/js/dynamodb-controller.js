const AWS = require("aws-sdk");

function logMonster(monster, wealth) {

  AWS.config.update({
    region:process.env.REACT_APP_REGION,
    accessKeyId:process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey:process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
  });

  const DynamoDB = new AWS.DynamoDB();

  const params = {
    TableName: "booster_dynamo",
    Item: {
      entry: { S: new Date().toLocaleString() + "" },
      monster: { S: monster },
      wealth: { S: wealth }
    },
  };

  DynamoDB.putItem(params, function(err) {
    if (err) {
      console.error("Could not write to log.", err);
    } else {
      console.log(`${monster} who is ${wealth} logged and loaded.`);
    }
  });
}

module.exports = {
  logMonster,
};

