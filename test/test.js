var chai = require("chai");
var expect = chai.expect;
var request = require('request');

describe("rutas", function() {
	describe("GET", function() {
		describe('/index', function(){
				it('error', function(done){
			      	request.get('http://localhost:3000',function (error, response, body) {
			      		expect(response.statusCode).to.be.below(400);
			      		done();
			      	});
			    });
		});

		describe('/perfil', function(){
				it('error', function(done){
			      	request.get('http://localhost:3000/perfil',function (error,response, body) {
			      		expect(response.statusCode).to.be.below(400);
			      		done();
			      	});
			    });
		});

		describe('/registrar', function(){
				it('error', function(done){
			      	request.get('http://localhost:3000/registrar',function (error, response, body) {
			      		expect(response.statusCode).to.be.below(400);
			      		done();
			      	});
			    });
		});
	});
	describe("POST", function() {
		describe('/registrar', function(){
				it('error', function(done){
			      	request.post('http://localhost:3000/registrar',function (error, response, body) {
			      		expect(response.statusCode).to.be.below(400);
			      		done();
			      	});
			    });
		});
		describe('/autenticar', function(){
				it('error', function(done){
			      	request.post('http://localhost:3000/autenticar',function (error, response, body) {
			      		expect(response.statusCode).to.be.below(400);
			      		done();
			      	});
			    });
		});
	});
});