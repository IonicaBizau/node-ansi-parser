var AnsiParser = module.exports = {};

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

    var re = /((?:\u001b\[.*?m)+)([^])([^])/
      , cur
      , result = []
      , str = input
      ;

    while ((cur = str.match(re)) !== null) {
        if ("\\" !== cur[3]) {
            result.push({
                style: cur[1].substring(0, cur[1].length - 1)
              , content: cur[2]
            });
            str = str.replace(re, "$1$3");
        } else {
            str = str.replace(re, "$3")
        }
    }

    result = result.slice(0, AnsiParser.removeAnsi(input).length);
    return result;
};

AnsiParser.removeAnsi = function (input) {
    return input.replace(/\u001b\[.*?m/g, "");
};

AnsiParser.stringify = function (arr) {
    var str = "";
    for (var i = 0; i < arr.length; ++i) {
        str += arr[i].style + arr[i].content + "\u001b";
    }
    return str;
};

AnsiParser.addChar = function (arr, c, s) {
    arr.push({
        style: s || ""
      , content: c
    });
};
