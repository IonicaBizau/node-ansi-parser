# ansi-parser [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/ansi-parser.svg)](https://www.npmjs.com/package/ansi-parser) [![Downloads](https://img.shields.io/npm/dt/ansi-parser.svg)](https://www.npmjs.com/package/ansi-parser) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Parse strings containing ANSI style characters.

## Installation

```sh
$ npm i --save ansi-parser
```

## Example

```js
// Dependencies
var AnsiParser = require("ansi-parser");

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
```

## Documentation

### `parse(input)`
Parses the string containing ANSI styles.

#### Params
- **String** `input`: The input string.

#### Return
- **Array** An array of object like below:

   ```js
   [
     {
         style: "\u00\u001b[1m\u001b[38;5;231",
         content: "H"
     },
     {
        style: "\u00\u001b[1m\u001b[38;5;231",
        content: "e"
     },
     ...
   ]
   ```

### `getAtIndex(input, noAnsi, index)`
Returns the content and ANSI style at known index.

#### Params
- **String** `input`: The input string.
- **String** `noAnsi`: The input string without containing ansi styles.
- **Number** `index`: The character index.

#### Return
- **Object** An object containing the following fields:
 - `style` (String): The ANSI style at provided index.
 - `content` (String): The content (character) at provided index.

### `removeAnsi(input)`
Removes ANSI styles from the input string.

#### Params
- **String** `input`: The input string.

#### Return
- **String** The string without ANSI styles.

### `stringify(arr)`
Stringifies an array of objects in the format defined by `AnsiParser`.

#### Params
- **Array** `arr`: The input array.

#### Return
- **String** The stringified input array.

### `addChar(arr, c, s, e)`
Adds a new char into array.

#### Params
- **Array** `arr`: The input array.
- **String** `c`: The char to add.
- **String** `s`: ANSI start style.
- **String** `e`: ANSI end style.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`bug-killer`](https://github.com/IonicaBizau/node-bug-killer)

 - [`cli-box`](https://github.com/IonicaBizau/node-cli-box)

 - [`cli-cal`](https://github.com/fnogatz/cli-cal) by Falco Nogatz

 - [`cli-gh-cal`](https://github.com/IonicaBizau/cli-gh-cal)

 - [`clp`](https://github.com/IonicaBizau/node-clp)

 - [`ghcal`](https://github.com/IonicaBizau/ghcal)

 - [`git-stats-colors`](https://github.com/IonicaBizau/node-git-stats-colors)

 - [`github-stats`](https://github.com/IonicaBizau/github-stats)

 - [`idea`](https://github.com/IonicaBizau/idea)

 - [`overlap`](https://github.com/IonicaBizau/node-overlap)

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md