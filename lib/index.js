// Constructor
var AnsiParser = module.exports = {};

/**
 * parse
 * Parses the string containing ANSI styles.
 *
 * @name parse
 * @function
 * @param {String} input The input string.
 * @return {Array} An array of object like below:
 *
 *  ```js
 *  [
 *    {
 *        start: "\u00\u001b[1m\u001b[38;5;231",
 *        end: "\u001b[0m\u001b[22m",
 *        content: "H"
 *    },
 *    {
 *       start: "\u00\u001b[1m\u001b[38;5;231",
 *       content: "e"
 *       end: "\u001b[0m\u001b[22m",
 *    },
 *    ...
 *  ]
 *  ```
 */
AnsiParser.parse = function (input) {

    if (Array.isArray(input)) {
        var arr = [];
        for (var i = 0; i < input.length; ++i) {
            arr.push(AnsiParser.parse(input[i]));
        }
        return arr;
    }

    if (typeof input !== "string") {
        throw new Error("Input is not a string.");
    }

    var re = /((?:\u001b\[.*?m)+)([^])([^]|)(?=.*?((?:\u001b\[.*?m)+)|)/
      , cur
      , result = []
      , str = input
      ;

    while (null != (cur = str.match(re))) {
        if ("" !== cur[3]) {
            if ("\u001b" === cur[2]) {
                str = "";
            } else {
                result.push({
                    start: cur[1],
                    content: cur[2],
                    end: cur[4]
                });
                str = str.replace(re, "$1$3");
            }
        } else {
            str = str.replace(re, "$3")
        }
    }

    return result;
};

/**
 * removeAnsi
 * Removes ANSI styles from the input string.
 *
 * @name removeAnsi
 * @function
 * @param {String} input The input string.
 * @return {String} The string without ANSI styles.
 */
AnsiParser.removeAnsi = function (input) {
    return input.replace(/\u001b\[.*?m/g, "");
};

/**
 * stringify
 * Stringifies an array of objects in the format defined by `AnsiParser`.
 *
 * @name stringify
 * @function
 * @param {Array} arr The input array.
 * @return {String} The stringified input array.
 */
AnsiParser.stringify = function (arr) {
    var str = ""
      , cArr = null
      ;
    for (var i = 0; i < arr.length; ++i) {
        cArr = arr[i];
        str += cArr.start + cArr.content + cArr.end;
    }
    return str;
};

/**
 * addChar
 * Adds a new char into array.
 *
 * @name addChar
 * @function
 * @param {Array} arr The input array.
 * @param {String} c The char to add.
 * @param {String} s ANSI start style.
 * @param {String} e ANSI end style.
 * @return {undefined}
 */
AnsiParser.addChar = function (arr, c, s, e) {
    arr.push({
        start: s || ""
      , content: c
      , start: e || ""
    });
};
