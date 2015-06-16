<!---------------------------------------------------------------------------->
<!-- STOP, LOOK & LISTEN!                                                   -->
<!-- ====================                                                   -->
<!-- Do NOT edit this file directly since it's generated from a template    -->
<!-- file, using https://github.com/IonicaBizau/node-blah                   -->
<!--                                                                        -->
<!-- If you found a typo in documentation, fix it in the source files       -->
<!-- (`lib/*.js`) and make a pull request.                                  -->
<!--                                                                        -->
<!-- If you have any other ideas, open an issue.                            -->
<!--                                                                        -->
<!-- Please consider reading the contribution steps (CONTRIBUTING.md).      -->
<!-- * * * Thanks! * * *                                                    -->
<!---------------------------------------------------------------------------->

# ansi-parser [![Donate now][donate-now]][paypal-donations]

Parse strings containing ANSI style characters.

## Installation

```sh
$ npm i ansi-parser
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

## License
[KINDLY][license] © [Ionică Bizău][website]–The [LICENSE](/LICENSE) file contains
a copy of the license.

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015
[contributing]: /CONTRIBUTING.md
[website]: http://ionicabizau.net
[docs]: /DOCUMENTATION.md
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MG98D7NPFZ3MG
[donate-now]: http://i.imgur.com/jioicaN.png