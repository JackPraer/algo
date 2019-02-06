
/**
 * Числа фибоначи 
 * 
 * @param {number} n 
 * @returns {number}
 */
const fib = (n: number) : number => n <= 1 ? n : fib(n - 1) + fib(n - 2)

/**
 * Числа фибоначи через хвостовую рекурсию
 * 
 * @param {number} n значение вычсления
 * @param {number} prev хранит результат предыдущего вычисления
 * @param {number} current текущее значение
 * @returns {number}
 */
const tailFib = (n: number, prev: number = 0, current: number = 1) : number => n <= 1 ? current : tailFib(n - 1, current, prev + current)

/**
 * Оптимальная функця вычисления фбоначи не через рекурсию 
 * 
 * @param {number} n 
 * @returns {number}
 */ 
const optimalFib = (n: number): number => range(1, n)
                                            .reduce(([a, b]: Array<number>) => [b, a + b], [0, 1])[0]

/**
 * Создаёт массив из переданного диапозона
 * 
 * @param {number} start начальное значение
 * @param {number} end конечное значение
 */
const range = (start: number, end: number): Array<number> => [...Array(Math.floor(end - start) + 1)]
                                                                .map((_, i: number) => start + i)


console.log(
    fib(7),
    tailFib(7),
    optimalFib(7),
)