const {Graph} = require('./Graph.js');
const PriorityQueue = require('./PriorityQueue');

const testGraph = new Graph(true, true);
const a = testGraph.addVertex('A');
const b = testGraph.addVertex('B');
const c = testGraph.addVertex('C');
const d = testGraph.addVertex('D');
const e = testGraph.addVertex('E');
const f = testGraph.addVertex('F');
const g = testGraph.addVertex('G');

testGraph.addEdge(a, c, 100);
testGraph.addEdge(a, b, 3);
testGraph.addEdge(a, d, 4);
testGraph.addEdge(a, d, 4);
testGraph.addEdge(b, d, 7);
testGraph.addEdge(b, g, 18);
testGraph.addEdge(c, e, 8);
testGraph.addEdge(c, f, 14);
testGraph.addEdge(d, c, 3);
testGraph.addEdge(d, e, 8);
testGraph.addEdge(e, b, -2);
testGraph.addEdge(e, f, 10);
testGraph.addEdge(b, g, 9);
testGraph.addEdge(e, g, -50);




const dijkstras = function(graph, startingVertex) {
    const distances = {};
    const previous = {};

    // initialization of distances and previous
    graph.vertices.forEach(vertex => {
        distances[vertex.data] = Infinity;
        previous[vertex.data] = null;
    }) distances[startingVertex.data] = 0;

    const queue = new PriorityQueue; // could as well have been an array. PriorityQueue simply and only changes the traversal order. In the end: All vertices need be traversed.
    queue.add({vertex: startingVertex, priority: 0});
    const visitedVertices = [ startingVertex ]; // not necessary in this implementation because queue.add() is conditioned
    while(!queue.isEmpty()) { // while queue is not empty, pop the latest vertex and interate through its edges.
        const { vertex } = queue.popMin();
        vertex.edges.forEach(edge => {
            const neighbor = edge.end;
            const neighborValue = neighbor.data;
            const alternate = distances[vertex.data] + edge.weight;
            if(alternate < distances[neighborValue]) { // if the new distance is shorter than the current distance, store it and add the  neighbor for further investigations to the queue.
                distances[neighborValue] = alternate;
                previous[neighborValue] = vertex; 
                queue.add({vertex: neighbor, priority: distances[neighborValue]})
            }
        })
    }

    return { distances, previous };
}

testGraph.print();
let result = dijkstras(testGraph, testGraph.vertices[0]);
console.log(result);
result = dijkstras(testGraph, testGraph.vertices[1]);
console.log(result);


const shortestPathBetween = (graph, startingVertex, targetVertex) => {
    const { distances, previous } = dijkstras(graph, startingVertex);
    const distance = distances[targetVertex.data];
    const path = [];
    let vertex = targetVertex;
    while(vertex !== null) {
      path.unshift(vertex) // add to beginning
      vertex = previous[vertex.data];
    }
    return { distance, path }
  };