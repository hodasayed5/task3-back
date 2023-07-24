const request = require("request")
const forecaste = require("./data1/forecaste")   
const geocode = require("./data1/geocode")
const country =process.argv[2]
geocode(country,
(error,response ) => {
console.log(error)
console.log(response)
 if(response) 
 {
forecaste(response.longtitude, response.latitude,
(error,response ) => {
console.log(error)
console.log(response)
})
 } else{
 console.log("error")   
 }})