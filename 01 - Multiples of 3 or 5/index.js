function solution(number) {
    try {
        var numberList = Array.from({ length: number }, (_, index) => index);
    } catch {
        return 0;
    }
    const multiples = numberList.map((num) => {
        return num % 3 === 0 || num % 5 === 0 ? num : 0;
    });
    return multiples.reduce((acc, value) => acc + value, 0);
}

console.log(solution(10));
