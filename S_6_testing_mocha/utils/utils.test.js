const utils = require('./utils');
it('should add two numbers', () => {
    var res = utils.add(33,44);  
    if(res != 77){
        throw new Error (`Expected 44 but got ${res}`);
    } 
});

it('Should be ok ', () => {
    var result = utils.square(2);
    if(result != 4){
        throw new Error(`Expected 2 but got ${result}`);
    }
});