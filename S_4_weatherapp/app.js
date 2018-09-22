const request = require('request');
const yargs = require('yargs');

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

console.log(argv);    
request({
    url: 'http://www.mapquestapi.com/geocoding/v1/address?key=aQf8OlnxuNsINADJcFxKu2qQMQfg8CoJ&location=1301%20lombard%20street%20philadelphia',
    //url: 'http://www.mapquestapi.com/geocoding/v1/address?key=aQf8OlnxuNsINADJcFxKu2qQMQfg8CoJ&location=34500%20zakopane',
    json: true
},(error,response,body) => {
    console.log(`Address: ${body.results[0].providedLocation.location}`);
    console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`);
    console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`);
});