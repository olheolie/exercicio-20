function calcularMDC(a, b) {
    while (b !== 0) {
        let resto = a % b;
        a = b;
        b = resto;
    }
    return a;
}

let num1 = 10;
let num2 = 4;
console.log("O MDC entre", num1, "e", num2, "é", calcularMDC(num1, num2));