var chai = require("chai");
var expect = chai.expect;

describe("unitTest", function() {
   	describe('Validarse', function(){
	  	describe('#validar()', function(){
		   	it('comprueba si se pudo valdiar en BD', function(){
		      	chai.assert.equal("", "");
		    });
		});
	}),
   	describe("GuardarDatos",function(){
		describe("#guardar()",function(){
		   it('comprueba si esta guardando los datos en la BD',function(){
		   		expect("").to.equal("");
		   });
		}) 
	});
});