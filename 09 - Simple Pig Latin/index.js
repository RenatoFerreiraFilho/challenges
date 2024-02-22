// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
    //Code here
    const newPhrase = str.split(" ").map((word) => {
        try {
            var newWord = word.match(/[a-zA-Z]/g).join("");
        } catch {
            return word;
        }
        return newWord.slice(1) + word[0] + "ay";
    });
    return newPhrase.join(" ");
}

console.log(pigIt("Pig latin"));
