const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server.js') // .. oznacza że wracamy wstecz tam jest plik server.js
const {Todo} = require('./../models.todo.js')

describe('POST /todos',() =>{
    it('should create new todo',(done) => {
        var test = 'Test todo text';
        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err,res) => {
                if(err){
                    return done(err)
                }

                Todo.find().then((todos) => {
                    expect(todos.lenght).toBe(1);
                    expect(todos[0].text).toBe(text)
                    done()
                }).catch((e) => done(e));
            });
    });
});