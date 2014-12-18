var chai = require("chai");
var expect = chai.expect;
var request = require('request');

describe("GET", function() {
	describe('/index', function(){
			it('error 500', function(done){
		      	request.get('http://localhost:3000',function (error, response, body) {
		      		expect(response.statusCode).to.equal(500);
		      		done();
		      	});
		    });
	});

	describe('/perfil', function(){
			it('error 500', function(done){
		      	request.get('http://localhost:3000/perfil',function (error, response, body) {
		      		expect(response.statusCode).to.equal(500);
		      		done();
		      	});
		    });
	});

	describe('/registrar', function(){
			it('error 500', function(done){
		      	request.get('http://localhost:3000/registrar',function (error, response, body) {
		      		expect(response.statusCode).to.equal(500);
		      		done();
		      	});
		    });
	});
});
describe("POST", function() {
	describe('/registrar', function(){
			it('error 500', function(done){
		      	request.post('http://localhost:3000/registrar',function (error, response, body) {
		      		expect(response.statusCode).to.equal(500);
		      		done();
		      	});
		    });
	});
	describe('/autenticar', function(){
			it('error 500', function(done){
		      	request.post('http://localhost:3000/autenticarx	',function (error, response, body) {
		      		expect(response.statusCode).to.not.equal(500);
		      		done();
		      	});
		    });
	});
});