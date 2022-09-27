const meInfo = require('./information.js');
console.log(meInfo);

var cowsay = require("cowsay");

console.log(cowsay.say({
    text: `${meInfo.name},${meInfo.campus}.`,
    e: "oO",
    T: "U "
}));