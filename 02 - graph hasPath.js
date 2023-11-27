/** 
 * https://structy.net/problems/has-path
has path
Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.

Hey. This is our first graph problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ

**/

const hasPath = (graph, src, dst) => {
    /**
    const stack = [ src ];
    
    while(stack.length > 0) {
      current = stack.pop();
      console.log(current, dst);
      if(current === dst) {
        return true;
      }
      
      for( let neighbors of graph[current]) {
        stack.push(neighbors);
      }
    }
    
    return false */
    /**
    if(src === dst) return true;
    
    for(let neighbors of graph[src]) {
      console.log(neighbors, dst);
      if(hasPath(graph, neighbors , dst) === true) {
        return true;
      };
    }
    return false;
    
  **/
    
  /**Breadth first Solution**/
    
const queue = [ src ];
    
    while (queue.length > 0) {
      const current = queue.shift()
      if(current === dst ) return true;
      
      for(neighbor of graph[current]) {
        queue.push(neighbor);
      }
    }
    
    return false;
  };