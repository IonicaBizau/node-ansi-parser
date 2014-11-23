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

AnsiParser.removeAnsi = function (input) {
    return input.replace(/\u001b\[.*?m/g, "");
};

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

AnsiParser.addChar = function (arr, c, s) {
    arr.push({
        style: s || ""
      , content: c
    });
};
