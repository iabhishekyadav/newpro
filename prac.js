var _ = require('lodash');

var http = require('http');

var arr = [1,2,3,false,0,NaN,4];
//console.log(_.compact(arr));

//console.log(_.indexOf(arr,4));console.log(_.join(arr,"--"));

var obj = {};

console.log(obj);
var users = [
/*  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }*/
];

var x = _.findLast(users, function(o) { return o.age < 40; });
console.log(x);

x = _.groupBy(users , {'age':36});

console.log(x);

var call = _.after(2 , function(){

		console.log(" name");
	})
for(var i=1;i<=2;i++)
{
	call();
}

var a = ['ab'];
a[3]='cd';

console.log(a);
_.forEach(a, function(val){
	//console.log(val+"\n");
})

a.forEach(function(val){

	//console.log(val+" -- \n");
})



var pig = function () {
  return {
    oink: function () {},
    snort: function () {}
  };
};
var dog = function () {
  return {
    bark: function () {},
    howl: function () {}
  };
};
1
var curly = _.assign({}, pig(), dog());

console.log(curly);	

var users = [
  {name: 'fred', age: 40, gender: 'male'},
  {name: 'wilma', age: 39, gender: 'female'},
  {name: 'pebbles', age: 2, gender: 'female'},
  {name: 'barney', age: 36, gender: 'male'},
  {name: 'betty', age: 35, gender: 'female'},
  {name: 'bamm bamm', age: 2, gender: 'male'}
];


var fun = function(user){
	return user.age>=18;
}
var leastaged = _(users).filter(['gender' , 'male'])
						.filter(fun)
						.sortBy('age')
						.head()
						.name;


//leastaged = _(users).head();

console.log(leastaged);

console.log(_.partition(users , );
