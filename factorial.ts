/**
 * Нахождение факториала
 * 
 * @param number n
 * @returns number
 */
const factorial = (n: number) : number => {
    if(n <= 1) {
        return 1
    }

    return n * factorial(n - 1)
}

/**
 * Нахождение факториала через хвостовую рекурсию
 * 
 * @param number n значение
 * @param number acc аккумулирующее значение
 * @returns number
 */
const tailFactorial: Function = (n: number, acc: number = 1): number => {
    if (n <= 1) {
        return acc
    }

    return tailFactorial(n - 1, acc * n)
}

// test
console.log(
    factorial(4),
    tailFactorial(4),
)
