## Documentation

You can see below the API reference of this module.

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

