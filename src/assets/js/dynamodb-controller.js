const AWS = require("aws-sdk");

const DynamoDB = new AWS.DynamoDB();

function logMonster(monster, wealth) {

  AWS.config.update({
    accessKeyId:process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey:process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
  });

  console.log(AWS.config)

  const params = {
    TableName: "booster_dynamo",
    Item: {
      entry: { S: monster },
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

