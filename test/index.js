var AnsiParser = require("../lib/index.js")
  , Fs = require("fs")
  , Couleurs = require("couleurs")()
  , tests = [
        Couleurs.rgb("Text with one color", 255, 0, 0)
      , Couleurs.bold("Bold text", 255, 0, 0)
      , "| " + Couleurs.rgb("12", 255, 0, 0)
      , Couleurs.rgb("Hello", 255, 0, 0) + " World! " + Couleurs.rgb("Isn't this cool?", 0, 255, 0)
      , Fs.readFileSync(__dirname + "/vim.txt", "utf-8")
    ];
  ;


for (var i=0; i < tests.length; ++i) {
    console.log(">>> Test " + (i + 1));
    console.log("> Input:");
    console.log(tests[i]);
    console.log("> Parsed and stringified:");
    var out = tests[i];
    console.log("Computed. Showing.");
    console.log(AnsiParser.stringify(AnsiParser.parse(out)));
}
