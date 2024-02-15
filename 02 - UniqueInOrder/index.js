// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

function uniqueInOrder(data) {
    return Array.isArray(data)
        ? data.reduce(
              (acc, d) => (acc[acc.length - 1] !== d ? [...acc, d] : acc),
              []
          )
        : data
              .split("")
              .reduce(
                  (acc, d) => (acc[acc.length - 1] !== d ? [...acc, d] : acc),
                  []
              );
}

const result = uniqueInOrder("AAAABBBCCDAABBB");
result;
const result2 = uniqueInOrder([1, 2, 2, 3, 3]);
result2;

let teste = "AAAABBBCCDAABBB";
console.log([...teste]);
