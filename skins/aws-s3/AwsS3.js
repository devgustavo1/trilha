const AWS = require('aws-sdk');
const fs = require('fs');

AWS.config.update({
  accessKeyId: 'AKIAJ5GKOECG2XTZCQRA',
  secretAccessKey: '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'
});

const s3 = new AWS.S3();
function uploadToS3(fileNameOld, fileName, callback) {
    fs.readFile(fileNameOld, function (err, data) {
        if (err) { throw err; }
      
        var base64data = new Buffer(data, 'binary');
      
        var s3 = new AWS.S3();
        s3.putObject({
          Bucket: 'trilha',
          Key: fileName,
          Body: base64data,
          ACL: 'public-read'
        },function (resp) {
          console.log(arguments);
          console.log('Successfully uploaded package.');
          callback(fileName)
        });
    });
      
}

async function getS3Image(fileName) {
  const data = await s3.getObject({
    Bucket: 'trilha',
    Key: fileName,
  }).promise();

  return data.Body;
}

module.exports.uploadToS3 = uploadToS3
module.exports.getS3Image = getS3Image