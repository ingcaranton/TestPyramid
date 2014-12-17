var chai = require("chai");
var expect = chai.expect;
describe("unitTest", function() {
   	describe('Array', function(){
	  	describe('#indexOf()', function(){
		   	it('should return -1 when the value is not present', function(){
		      	chai.assert.equal(-1, [1,2,3].indexOf(5));
		      	chai.assert.equal(-1, [1,2,3].indexOf(0));
		    });
		});
	}),
   	describe("Cadenas",function(){
		describe("subcadenas",function(){
		   it('deberia retornar una sub cadenas',function(){
		   		expect("Bello").to.equal("Panama es Bello".substring(10,15));
		   });
		}) 
	});
});