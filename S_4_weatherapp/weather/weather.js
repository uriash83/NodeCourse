const request = require('request');

var getWeather = (latitude,longitude,callback) => {
    request({
        url: `https://api.darksky.net/forecast/98194cb1471ce2b603507e80c510c364/${latitude},${longitude}`,
        //url: `https://api.darksky.net/forecast/98194cb1471ce2b603507e80c510c364/49.2969,19.9506`,
        json: true
    },(error,response,body) => {
        //if(!error && response.statusCode === 200){
        if(error){
            callback('Unable to connect google server');
            
        }
        else{
            console.log("POS: "+latitude,longitude);
            callback(undefined,{
                temperature: body.currently.temperature,
                apparentTemp: body.currently.apparentTemperature
            });
            
        }
        
        
    });
};


module.exports.getWeather = getWeather;
