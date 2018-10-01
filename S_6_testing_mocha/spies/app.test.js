const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js'); // rewire może być zamienne z require
describe('App',() => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db',db);

    it('Should call spy correctly', () => {
        var spy = expect.createSpy();
        spy('Martin',25);
        expect(spy).toHaveBeenCalledWith('Martin',25);
    });

    it('should call saveUser with user objcet'), () => {
        var email = "admin@admin.com";
        var password = '123qwe';

        app.handleSignUp(email,password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password});
    };

});