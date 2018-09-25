const request = require('request');// biblioteka require nie wspiera Promise dlatego trzeba cały request zwinac w ciele funkcji

var geocodeAddress = (address) => {
    var encodedAddress = encodeURIComponent(address);
    return new Promise((resolve,reject)=>{
        request({
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=aQf8OlnxuNsINADJcFxKu2qQMQfg8CoJ&location=${encodedAddress}`,
            //url: 'http://www.mapquestapi.com/geocoding/v1/address?key=aQf8OlnxuNsINADJcFxKu2qQMQfg8CoJ&location=34500%20zakopane',
            json: true
        },(error,response,body) => {
            if(error){
                reject('Unable to connect google server');
            }
            else if(body.status === 'ZERO_RESULTS'){
                reject('Addres not found');
            }
            else{
                resolve({
                    address: body.results[0].providedLocation.location,
                    latitude: body.results[0].locations[0].latLng.lat,
                    longitude: body.results[0].locations[0].latLng.lng
                });
            }
            
        });
    });
    
};

geocodeAddress('kraków').then((location)=>{
    console.log(JSON.stringify(location,undefined,2));
},(errorMessage)=>{
    console.log(errorMessage)
});