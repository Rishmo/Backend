const sum =(a,b) => a+b;
const mul =(a,b) => a*b;
const g = 9.8;

module.exports= "hello!";

let obj = {
    sum: sum,
    mul: mul,
    g: g
};

module.exports = obj;

module.exports = {
    sum: sum,
    mul: mul,
    g: g
};

module.exports.sum = (a,b) => a+b;
exports.sum = (a,b) => a+b;
exports= 5; // generate error; think as a variable