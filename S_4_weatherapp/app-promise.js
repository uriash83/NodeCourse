const yargs = require('yargs');
const axios = require('axios'); 

var latitude,longitude = '';
const argv = yargs
    .option({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help','h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);    
var geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=aQf8OlnxuNsINADJcFxKu2qQMQfg8CoJ&location=${encodedAddress}`;

axios.get(geocodeUrl).then((response)=>{
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error ('Unable to find address');
    }
    
    var latitude = response.data.results[0].locations[0].latLng.lat;
    var longitude = response.data.results[0].locations[0].latLng.lng;
    var weatherUrl = `https://api.darksky.net/forecast/98194cb1471ce2b603507e80c510c364/${latitude},${longitude}`; 
    console.log(response.data.results[0].providedLocation.location,latitude,longitude);
    return axios.get(weatherUrl);
}).then((response)=>{
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. Its feel like ${apparentTemperature}`);
}).catch((e)=>{
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to connect');
    }
    else{
        console.log(e.message);
    }
    
});