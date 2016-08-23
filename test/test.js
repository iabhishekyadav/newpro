
var expect = require('chai').expect;
var getArray = require('../routes/router');

describe('testfun' , function(){

	arr = getArray.fn();
	//arr = "Hello";
	console.log(typeof arr , " ss");
	//expect(arr).to.equal('Hello');
	expect(arr.toUpperCase()).to.equal('HELLO');
	//expect(arr).to.equal('Hello').toUpperCase();

})

describe('second test' , function(){

	//var arr = getArray.fn();

	console.log("test 2 begins");

	expect(arr.length >0 ,true);
	expect(typeof arr).to.equal('string');
})