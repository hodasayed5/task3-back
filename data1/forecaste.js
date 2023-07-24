const request = require("request")
const forecaste = (longtitude, latitude, callback) => {
const url = 'http://api.weatherapi.com/v1/current.json?key=7e11680225eb42b8bdc185352232407&q=' + longtitude + "," + latitude
request({ url, json: true }, (error, response) => {
if (error) {
callback("error23", undefined)
}
else if (response.body.error) {
callback(response.body.error.message, undefined)
}
else {
callback(undefined, response.body.location.name + " it is " + response.body.current.condition.text +" and temp "+ response.body.current.temp_c )
}})}
module.exports = forecaste;