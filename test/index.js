var AnsiParser = require("../lib/index.js")
  , Fs = require("fs")
  , Couleurs = require("couleurs")
  , tests = [
        Couleurs("Text with one color", [255, 0, 0])
      , Couleurs.bold("Bold text", 255, 0, 0)
      , "| " + Couleurs("12", [255, 0, 0])
      , Couleurs("Hello", [255, 0, 0]) + " World! " + Couleurs("Isn't this cool?", [0, 255, 0])
      , Fs.readFileSync(__dirname + "/image", "utf-8")
    ];
  ;


for (var i=0; i < tests.length; ++i) {
    console.log(">>> Test " + (i + 1));
    console.log(tests[i]);
    var out = AnsiParser.stringify(AnsiParser.parse(tests[i]));
    console.log(out);
}
