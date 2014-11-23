var AnsiParser = require("../lib/index.js")
  , Couleurs = require("couleurs")()
  , input = Couleurs.rgb("Hello World!", 255, 0, 0)
  ;

console.log(input);
console.log(AnsiParser.parse(input));
debugger;
console.log(AnsiParser.stringify(AnsiParser.parse(input)));
