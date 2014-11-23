var AnsiParser = require("../lib/index.js")
  , Couleurs = require("couleurs")()
  , input = Couleurs.rgb("Hello", 255, 0, 0) + " World! " + Couleurs.rgb("Isn't this cool?", 0, 255, 0);
  ;

console.log(input);
console.log(AnsiParser.stringify(AnsiParser.parse(input)));

console.log(AnsiParser.stringify(AnsiParser.parse("Non colored.")));
