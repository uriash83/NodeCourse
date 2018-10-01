const expect = require('expect');
const utils = require('./utils');

describe('Utils',()=>{

    describe('#add',()=>{
        it('should add two numbers', () => {
            var res = utils.add(33,44);  
        
            expect(res).toBe(77).toBeA('number');
            // if(res != 77){
            //     throw new Error (`Expected 44 but got ${res}`);
            // } 
        });
    });
    

    it('Should be ok ', () => {
        var result = utils.square(2);
    
        expect(result).toBe(4).toBeA('number');
        // if(result != 4){
        //     throw new Error(`Expected 2 but got ${result}`);
        // }
    });

});



it('should add ascync numbers'), (done) => {
    utils.asyncAdd(2,3,(sum) => {
        expect(sum).toBe(5).toBeA('number');
        done();
    });
};
// done mówi Mocha że to jest test asynchoarniczej funcji



it('shoule be some value', () => {
    var user = {location: 'Warszawa',age: 35};
    var res = utils.setName(user,'Marcin Mentel');
    expect(user).toEqual(res);
    // //expect(12).toNotBe(11);
    // //expect({name: 'Martin'}).toEqual({name: "Martin"});
    // // .toBe służy do porównywania wartości prymotywnych
    // //expect([2,3,4]).toInclude([3]);// toInclude czy jest w tabeli , toExclude - czy nie jest we tablicy
    // expect({
    //     name: "Marcin",
    //     age: 35,
    //     location: 'Warszawa'
    // }).toInclude({age: 35});
});