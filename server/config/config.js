var env = process.env.NODE_ENV || 'development';
console.log('env ****',env);

if(env === "test" || env === "development"){
    var config = require('./config.json')
    var envConfig = config[env];
    console.log(envConfig);

    Object.keys(envConfig).forEach((key)=>{
        process.env[key] = envConfig[key];
    });
}
// do zmiannej env node przypisuje następujące wartości 
// env = 'production' - wartość domyślna
// env = 'development' - gdy działamy lokalnie
// enc = 'test' - robmy testy z  moka 

// if(env == 'development'){ // to jaka jest zmianna przypisywana do enc zależy dzie używamy aplikacji
//     process.env.PORT = 3000;
//     process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
// }else if(env == 'test'){
//     process.env.PORT = 3000;
//     process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
// }