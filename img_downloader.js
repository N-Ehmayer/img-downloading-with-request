var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(error){
    throw err;
  })
  .on('response', function(response){
    console.log('Response Status Code: ', response.statusCode);
    console.log('Download complete.');
  })
  .pipe(fs.createWriteStream('./future.png'));
  console.log('Downloading image...');


