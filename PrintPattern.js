function printPattern(n) {
    for (let i = n; i >= 1; i--) {
        let line = "";

        for (let j = 0; j <= i; j++) {
            let res = factorial(i) / (factorial(j) * factorial(i - j));
            line += res + " ";
        }

        console.log(line);
    }
}

function factorial(num) {
    let fact = 1;
    for (let k = 1; k <= num; k++) {
        fact *= k;
    }
    return fact;
}

printPattern(4);
