var express = require('express');
var request = require('request');
var xml2js = require('xml2js');
var router = express.Router();
var ServiceKey = '3MCAwjJGca%2FjyMQ6u8fYWdmDV%2BLSZBWjhz5yLy8i%2B6vgWiBPbFqKG0Af4kXKcD6l0hdxQpHV5F4%2BRBdshD%2BoNg%3D%3D'
/* GET users listing. */
router.get('/', function(req, res, next) {

var url = 'http://www.rda.go.kr/openapidata/service/newvariety_api/newvariety_itmcode';
var queryParams = '?' + encodeURIComponent('ServiceKey') + '='+ServiceKey; /* Service Key*/
var parser = new xml2js.Parser();
request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    //console.log('Status', response.statusCode);
    //console.log('Headers', JSON.stringify(response.headers));
    //console.log('Reponse received', body);
    parser.parseString(body, function (err, result) {
    res.json(result);
    //console.log('Done');
    });

});
});

module.exports = router;
