// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
    const newStr = str.length % 2 === 1 ? str + "_" : str;
    console.log(newStr);
    var acc = "";
    var result = [];
    newStr.split("").map((s, i) => {
        acc = acc + s;
        if ((i + 1) % 2 === 0) {
            result.push(acc);
            acc = "";
        }
    });
    return result;
}

console.log(solution("abs"));
