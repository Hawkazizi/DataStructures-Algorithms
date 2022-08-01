class Graph {
  constructor() {
    this.numOfNodes = 0;
    this.adjacent = {};
  }

  addVortex(node) {
    this.adjacent[node] = [];
    this.numOfNodes++;
  }

  addEdge(node1, node2) {
    this.adjacent[node1].push(node2);
    //becuz it's two ways[undirected]
    this.adjacent[node2].push(node1);
    return this;
  }
}

const myGraph = new Graph();
myGraph.addVortex(0);
myGraph.addVortex(1);
myGraph.addVortex(2);
myGraph.addVortex(3);
myGraph.addVortex(4);
myGraph.addVortex(5);
myGraph.addVortex(6);

myGraph.addEdge(1, 0);
myGraph.addEdge(3, 1);
myGraph.addEdge(4, 3);
myGraph.addEdge(2, 4);
myGraph.addEdge(2, 1);
myGraph.addEdge(2, 0);
myGraph.addEdge(5, 4);
myGraph.addEdge(6, 5);

console.log(myGraph);

// 0--> [1,2]
