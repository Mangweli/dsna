/**
 * 
 * Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.
 * https://structy.net/problems/connected-components-count
 * 
 */ 

const connectedComponentsCount = (graph) => {
    const visited = new Set();
    let count = 0;
    
    for (let node in graph) {
      if(explore(graph, node, visited)  === true) {
        count++; 
      }
    }
    
    return count;
  };
  
  const explore = (graph, current, visited) => {
    if(visited.has(String(current))) return false
    
    visited.add(String(current));
    for (let neigbour of graph[current]) {
      explore(graph, neigbour, visited)
    }
    
    return true;
  } 
  
  module.exports = {
    connectedComponentsCount,
  };
  

connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
  }); // -> 2

  connectedComponentsCount({
    1: [2],
    2: [1,8],
    6: [7],
    9: [8],
    7: [6, 8],
    8: [9, 7, 2]
  }); // -> 1