/** 
 * 
 * Using loop
 */
const depthFirstSearch = (graph, source) => {
    const stack = [source];

    while(stack.length > 0) {
        const current = stack.pop();
        console.log(current);

        for(let neighbors of graph[current]) {
            stack.push(neighbors);
        }
    }
}


/**
 * 
 * Using Recursive


const depthFirstSearch = (graph, source) => {
    console.log(source);

    for(let neighbors of graph[source]) {
        depthFirstSearch(graph, neighbors);
    }
    
} 

*/


const breadthFirstPrint = (graph, source) => {
    const queue = [ source ];

    while(queue.length > 0) {
        current = queue.shift();
        console.log(current);

        for (let neighbors of graph[current]) {
            queue.push(neighbors)
        }
    }
}



const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

breadthFirstPrint(graph, 'a');
depthFirstSearch(graph, 'a');