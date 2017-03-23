
# ansi-parser

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/ansi-parser.svg)](https://www.npmjs.com/package/ansi-parser) [![Downloads](https://img.shields.io/npm/dt/ansi-parser.svg)](https://www.npmjs.com/package/ansi-parser)

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

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`bug-killer`](https://github.com/IonicaBizau/node-bug-killer)—Simple way to log messages in stdout or other stream.
 - [`cli-box`](https://github.com/IonicaBizau/node-cli-box)—A library to generate ASCII boxes via NodeJS
 - [`cli-cal`](https://github.com/fnogatz/cli-cal) (by Falco Nogatz)—Github-like calendar graph for the CLI
 - [`cli-gh-cal`](https://github.com/IonicaBizau/cli-gh-cal)—GitHub like calendar graphs in command line.
 - [`ghcal`](https://github.com/IonicaBizau/ghcal)—See the GitHub contributions calendar of a user in the command line.
 - [`github-stats`](https://github.com/IonicaBizau/github-stats)—Visualize stats about GitHub users and projects in your terminal.
 - [`idea`](https://github.com/IonicaBizau/idea)—A lightweight CLI tool and module for keeping ideas in a safe place quick and easy.
 - [`jupyter-dashboards-server`](https://github.com/jupyter-incubator/dashboards_server#readme) (by Jupyter Development Team)—Serves Jupyter notebooks as standalone dashboards
 - [`le-table`](https://github.com/IonicaBizau/le-table)—Another NodeJS module for creating ASCII tables.
 - [`overlap`](https://github.com/IonicaBizau/node-overlap)—Overlap two strings that contain new lines. Useful for ASCII drawings.
 - [`tilda`](https://github.com/IonicaBizau/tilda)—Tiny module for building command line tools.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
