// Dependencies
var AnsiParser = require("../lib");

// Parse the ANSI input
console.log(AnsiParser.parse("\u001b[1m\u001b[38;5;231mHello\u001b[0m\u001b[22m World"));
// [
//   {
//       style: "\u00\u001b[1m\u001b[38;5;231",
//       content: "H"
//   },
//   {
//      style: "\u00\u001b[1m\u001b[38;5;231",
//      content: "e"
//   },
//   ...
// ]

// Remove ANSI styles
console.log(AnsiParser.removeAnsi("\u001b[1m\u001b[38;5;231mHello\u001b[0m\u001b[22m World"));
// => "Hello World"
