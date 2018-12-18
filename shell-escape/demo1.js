var shellescape = require('shell-escape');
 
var args = ['curl', '-v', '-H', 'Location;', '-H', 'User-Agent: dave#10', 'http://www.daveeddy.com/?name=dave&age=24'];
 
var escaped = shellescape(args);
console.log(escaped);
// console.log('---------------',shellescape({name:'9999',path:'/dev'}))