const babel = require("@babel/core");
const optionsObject = {};
console.log(babel.transformSync("code", optionsObject));
