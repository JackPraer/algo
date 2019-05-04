/**
 * Простая реализация функциоанальных линз
 */

/** функция отображения элемента через линзу */
const view = (lens, obj) => lens.get(obj)

/** функция установки значения через линзу */
const set = (lens, val, obj) => lens.set(val, obj)

/** функция изменеия значения через линзу */
const over = (lens, fn, obj) => lens.set(fn(lens.get(obj)), obj)

/** функция удаление значения через линзу */
const remove = (lens, obj) => lens.remove(obj)

/**
 * линза
 *
 * @param source sting
 * @param destination string
 * @returns {{set: (function(*, *)), get: (function(*): *), remove: (function(*): *)}}
 */
const lens = (source, destination = source) => ({
    get: obj => obj[source],
    set: (val, obj) => ({ ...obj, [destination]: val }),
    remove: obj => {
        const { [destination]: forgot, ...other } = obj;
        return other;
    },
});

const compose = (...lenses) => lenses.reduce((acc, lens) => ({
        get: key => lens.get(acc.get(key)),
        set: (val, obj) => acc.set(lens.set(val, acc.get(obj)), obj)
    })
)

/** test */

const test = {
    name: 'vany',
    age: 20,
    comment: {
        title: 'asd',
        like: 6,
        answer: {
            name: 'fred'
        }
    }
}

const lensComment = lens('comment')
const lensAnswer = lens('answer')
const lensName = lens('name')
const lensOb =  compose(lensComment, lensAnswer, lensName)

const test2 = set(
    lensOb,
    'Jorg',
    test
)

const test3 = remove(
    lens(lensComment),
    test2
)

const test4 = over(
    lens('age'),
    x => x + 1,
    test3
)


const test5 = view(
    lens('age'),
    test4
)

console.log(test, test2, test3, test4, test5)
