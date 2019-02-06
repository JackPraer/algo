/**
 * Нахождение факториала
 * 
 * @param {number} n 
 * @returns {number} 
 */
const factorial = (n: number) : number => n <= 1 ? 1 : n * factorial(n - 1)

/**
 * Нахождение факториала через хвостовую рекурсию
 * 
 * @param {number} n значение
 * @param {number} acc аккумулирующее значение
 * @returns {number} 
 */
const tailFactorial: Function = (n: number, acc: number = 1): number => n <= 1 ? acc : tailFactorial(n - 1, acc * n)

console.log(
    factorial(4),
    tailFactorial(4),
)
