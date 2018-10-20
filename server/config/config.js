var env = process.env.NODE_ENV || 'development';
console.log('env ****',env);
// do zmiannej env node przypisuje następujące wartości 
// env = 'production' - wartość domyślna
// env = 'development' - gdy działamy lokalnie
// enc = 'test' - robmy testy z  moka 
if(env == 'development'){ // to jaka jest zmianna przypisywana do enc zależy dzie używamy aplikacji
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
}else if(env == 'test'){
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}