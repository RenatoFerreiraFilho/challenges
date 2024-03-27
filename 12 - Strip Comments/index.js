// Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
// Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

function solution(string, markers) {
    const letters = string.split("");
    var ignore = false;
    var result = "";

    for (letter of letters) {
        if (markers.indexOf(letter) !== -1) {
            ignore = true;
        }
        if (letter === "\n") {
            ignore = false;
            result = result.replace(/[ \t]+$/g, "");
        }
        if (!ignore) {
            result += letter;
        }
    }
    return result.replace(/[ \t]+$/g, "");
}

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", [
    "#",
    "!",
]);

var result = solution("aa bb cc", []);
