const request = require('request');

var geocodeAddress = (address,callback) => {
    var encodedAddress = encodeURIComponent(address);
    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=aQf8OlnxuNsINADJcFxKu2qQMQfg8CoJ&location=${encodedAddress}`,
        //url: 'http://www.mapquestapi.com/geocoding/v1/address?key=aQf8OlnxuNsINADJcFxKu2qQMQfg8CoJ&location=34500%20zakopane',
        json: true
    },(error,response,body) => {
        if(error){
            callback('Unable to connect google server');
        }
        else if(body.status === 'ZERO_RESULTS'){
            callback('Addres not found');
        }
        else{
            callback(undefined,{
                address: body.results[0].providedLocation.location,
                latitude: body.results[0].locations[0].latLng.lat,
                longitude: body.results[0].locations[0].latLng.lng
            });
        }
        
    });
};

module.exports = {
    geocodeAddress
};