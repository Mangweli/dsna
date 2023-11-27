/**
 * Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.
 * 
 * https://structy.net/problems/undirected-path
 * const undirectedPath = (edges, nodeA, nodeB) => {};
 * 
 * 
 */
/*** Undirected graph */

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const stack = [ nodeA ];
  let visited = new Set();
  
  while(stack.length > 0) {
    current = stack.pop();
  
    if(current === nodeB) return true;
    
    for(neighbor of graph[current]) {
     if(!visited.has(neighbor)) {
        stack.push(neighbor);
        visited.add(neighbor);
     }
    }
  }
  
  return false
};

const buildGraph = (edges) => {
  const graph = {};
  
  for (let edge of edges) {
    const [a, b] = edge;
    
    if(!(a in graph)) graph[a] = [];
    if(!(b in graph)) graph[b] = [];
    
    graph[a].push(b);
    graph[b].push(a);
  }
  
  return graph;
} 

/**
 * 
 * using recussuve
 * 
  const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return hasPath(graph, nodeA, nodeB, new Set());
  
};

const hasPath = (graph, src, dst, visited) => {

  if(src === dst) return true;
  if(visited.has(src)) return false;
  
  visited.add(src);
  for (neighbor of graph[src]) {
    if(hasPath(graph, neighbor, dst, visited) === true)  {
      return true
    }
  }
  
  return false;
} 
 */
edges: [
    [i, j],
    [k, i],
    [m, k],
    [k, l],
    [o, n]
]

/** Adjacency List */

const graph = {
    i: [j, k],
    j: [i],
    k: [i, m, l],
    m: [k],
    l: [k],
    o: [n],
    n: [o]
}

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];

const edges2 = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't'],
  ];
  
undirectedPath(edges, 'm', 'j'); // -> true
undirectedPath(edges, 'l', 'j'); // -> true
undirectedPath(edges, 'l', 'j'); // -> true
undirectedPath(edges, 'k', 'o'); // -> false
undirectedPath(edges, 'i', 'o'); // -> false
undirectedPath(edges2, 'a', 'b'); // -> true