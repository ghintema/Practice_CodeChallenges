class Edge {
    constructor(start, end, weight = 0) {
        this.start = start;
        this.end = end;
        this.weight = weight;
    }
}


class Vertex {
    constructor(data) {
        this.data = data;
        this.edges = [];
      }
    
    addEdge(vertex, weight) {
        if(vertex instanceof Vertex) {
            const newEdge = new Edge(this, vertex, weight);
            this.edges.push(newEdge)
        } else {
            throw new Error ('input of addEdge is not instance of Vertex')
        }
    }

    removeEdge(vertex) {
        if (vertex instanceof Vertex) {
            this.edges = this.edges.filter(edge => edge.end !== vertex);
        } else {
            throw new Error('input of removeEdge is not instance of Vertex')
        }
    }

    print() {
        const edgeList = this.edges.map(edge =>
            edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data);

        const output = `${this.data} --> ${edgeList.join(', ')}`;
        console.log(output);
    }
   
    
   

}


class Graph {
    constructor(weighted = false, isDirected = false) {
        this.vertices = [];
        this.weighted = weighted;
        this.isDirected = isDirected;
      }
    
    addVertex(data) {
        const newVertex = new Vertex(data);
        this.vertices.push(newVertex);

        return newVertex;
    }

    removeVertex(vertex) {
        this.vertices = this.vertices.filter(v => v !== vertex);
    }

    addEdge(vertexOne, vertexTwo, weight = 0) {
        const edgeWeight = this.weighted ? weight : 0
        if( vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
            vertexOne.addEdge(vertexTwo, edgeWeight);
            if (!this.isDirected) {
                vertexTwo.addEdge(vertexOne, edgeWeight);
            }
        } else {
            throw new Error('input of addEdge is not instance of Vertex');
        }
    }

    removeEdge(vertexOne, vertexTwo) {
        if( vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
            vertexOne.removeEdge(vertexTwo);
            if(!this.isDirected) {
                vertexTwo.removeEdge(vertexOne);
            }
        } else {
            throw new Error ('input of removeEdge is not instance of Vertex')
        }
    }
    
    depthFirstTraversal(start, callback, visitedVertices = [start]) {
        callback(start); 
        start.edges.forEach(edge => {
            const neighbor = edge.end;
            if(!visitedVertices.includes(neighbor)) {
                visitedVertices.push(neighbor);
                this.depthFirstTraversal(neighbor, callback, visitedVertices);
            }
        })
    }

    breathFirstTraversal(start, callback) {
        let queue = [start];
        let visitedVertices = [];    
        while(queue.length) {
            const current = queue.shift();
            visitedVertices.push(current);
            callback(current);
            current.edges.forEach(edge => {
                const neighbor = edge.end;
                if(!visitedVertices.includes(neighbor)) {
                    queue.push(neighbor);
                }
            })
        }

    }

    print() {
    this.vertices.forEach(vertex => vertex.print());
    }
}


// const trainNetwork = new Graph(false, true);
// const atlantaStation = trainNetwork.addVertex('Atlanta');
// const newYorkStation = trainNetwork.addVertex('New York');
// const chicagoStation = trainNetwork.addVertex('Chicago');
// trainNetwork.print();
// // newYorkStation.addEdge(chicagoStation,300);
// trainNetwork.addEdge(atlantaStation, newYorkStation,800);
// trainNetwork.print();
// trainNetwork.removeEdge(atlantaStation, newYorkStation);
// trainNetwork.print();
// console.log(trainNetwork.edges)

// const simpleGraph = new Graph(true, true);
// const startNode = simpleGraph.addVertex('v0.0.0');
// const v1 = simpleGraph.addVertex('v1.0.0');
// const v2 = simpleGraph.addVertex('v2.0.0');

// const v11 = simpleGraph.addVertex('v1.1.0');
// const v12 = simpleGraph.addVertex('v1.2.0');
// const v21 = simpleGraph.addVertex('v2.1.0');

// const v111 = simpleGraph.addVertex('v1.1.1');
// const v112 = simpleGraph.addVertex('v1.1.2');
// const v121 = simpleGraph.addVertex('v1.2.1');
// const v211 = simpleGraph.addVertex('v2.1.1');

// simpleGraph.addEdge(startNode, v1);
// simpleGraph.addEdge(startNode, v2);

// simpleGraph.addEdge(v1, v11);
// simpleGraph.addEdge(v1, v12);
// simpleGraph.addEdge(v2, v21);

// simpleGraph.addEdge(v11, v111);
// simpleGraph.addEdge(v11, v112);
// simpleGraph.addEdge(v12, v121);
// simpleGraph.addEdge(v21, v211);

// simpleGraph.print();
// simpleGraph.depthFirstTraversal(simpleGraph.vertices[0],(vertex) => { console.log(vertex.data)})
// simpleGraph.breathFirstTraversal(simpleGraph.vertices[0],(vertex) => { console.log(vertex.data)})
            


module.exports = { Graph };