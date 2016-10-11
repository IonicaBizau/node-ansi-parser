
# ansi-parser

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/ansi-parser.svg)](https://www.npmjs.com/package/ansi-parser) [![Downloads](https://img.shields.io/npm/dt/ansi-parser.svg)](https://www.npmjs.com/package/ansi-parser) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Parse strings containing ANSI style characters.

## :cloud: Installation

```sh
$ npm i --save ansi-parser
```


## :clipboard: Example



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

## :memo: Documentation


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



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`bug-killer`](https://github.com/IonicaBizau/node-bug-killer)—Simple way to log messages in stdout or other stream.
 - [`cli-box`](https://github.com/IonicaBizau/node-cli-box)—A library to generate ASCII boxes via NodeJS
 - [`cli-cal`](https://github.com/fnogatz/cli-cal) (by Falco Nogatz)—Github-like calendar graph for the CLI
 - [`cli-gh-cal`](https://github.com/IonicaBizau/cli-gh-cal)—GitHub like calendar graphs in command line.
 - [`ghcal`](https://github.com/IonicaBizau/ghcal)—See the GitHub contributions calendar of a user in the command line.
 - [`git-stats-colors`](https://github.com/IonicaBizau/node-git-stats-colors)—Adds colors to the git-stats inputs.
 - [`github-stats`](https://github.com/IonicaBizau/github-stats)—Visualize stats about GitHub users and projects in your terminal.
 - [`idea`](https://github.com/IonicaBizau/idea)—A lightweight CLI tool and module for keeping ideas in a safe place quick and easy.
 - [`jupyter-dashboards-server`](https://github.com/jupyter-incubator/dashboards_server#readme) (by Jupyter Development Team)—Serves Jupyter notebooks as standalone dashboards
 - [`le-table`](https://github.com/IonicaBizau/le-table)—Another NodeJS module for creating ASCII tables.
 - [`overlap`](https://github.com/IonicaBizau/node-overlap)—Overlap two strings that contain new lines. Useful for ASCII drawings.
 - [`tilda`](https://github.com/IonicaBizau/tilda)—Tiny module for building command line tools.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
