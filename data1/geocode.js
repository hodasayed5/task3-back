
const request = require("request")
const geocode = (address, callback) => {
const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoiZmF0bWEtc2F5ZWQiLCJhIjoiY2xoa2x2aTcwMHRiYTNjcDFreHQ4a2JqMiJ9.dk4AmY1b_42ZnQ1af8FTLg"
request({ url: geocodeUrl, json: true }, (error, response) => {
if (error){
callback("hoda sayed she is sapap", undefined)
}
else if (response.body.message) {
callback(response.body.message, undefined)
}
else if (response.body.features.length == 0) {
callback("fatma sayed she is sapap", undefined)
}
else {
callback(undefined,
{
longtitude: response.body.features[0].center[0],
latitude: response.body.features[0].center[1]
})}})}
module.exports = geocode;