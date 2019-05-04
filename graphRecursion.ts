type TGraph = {
    [item: string]: TGraph
}

/**
 * На самом деле это не граф а дерево
 */
let graph : TGraph = {
    alice: {
        anuj: {},
        peggy: {},
    },
    bob: {
        mark: {},
    },
    claire: {
        tom: {
            jack: {},
            john: {}
        },
        jonny: {},
    },
}

/**
 * Рекурсивный
 * Поиск в ширину
 *
 * @param TGraph graph
 * @param string element
 */
const breadthFirstSearch= (graph: TGraph, searchElement: string) : string => {
    if (Object.keys(graph).length == 0) {
        console.log('search element not found')
        return null
    }

    let list = {};
    for (let nodeName in graph) {
        if (nodeName === searchElement) {
            console.log('search element found at ', graph)
            return nodeName;
        }

        Object.assign(list, graph[nodeName])
    }

    return breadthFirstSearch(list, searchElement)
}


/**
 * Рекурсивный
 * Поиск в глубину
 *
 * @param TGraph graph
 * @param string element
 */
const depthFirstSearch = (graph: TGraph, element: string) => {

    if (Object.keys(graph).length == 0) {
        return null
    }

    for (let nodeName in graph) {
        if (nodeName === element) {
            return nodeName;
        }

        let searchElem = depthFirstSearch(graph[nodeName], element)

        if (searchElem !== null) {
            console.log('search element found at ', graph[nodeName])
            return searchElem
        }
    }

    console.log('search element not found')

    return null;
}

// test
console.log(
    breadthFirstSearch(graph, 'jack'),
    breadthFirstSearch(graph, 'man'),
    depthFirstSearch(graph, 'jack'),
    depthFirstSearch(graph, 'man'),
)


