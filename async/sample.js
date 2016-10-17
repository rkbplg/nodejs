
function asyncFunction(callback) {
	console.log('setting timeout');
	setTimeout(callback, 200);
	console.log('leaving timeout');
}

var color = 'blue';
console.log('The color is ' + color);

asyncFunction(function() {
	console.log('In side the function');
	console.log('The color is ' + color);

});

console.log('The color is ' + color);
var color = 'green';
console.log('The color is ' + color);