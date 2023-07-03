// 1129. Shortest Path with Alternating Colors

var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
    let adj = new Array(n);
    for (let i = 0; i < n; i++) {
        adj[i] = [];
    }

    // Create adjacency list using the provided red and blue edges
    for (let redEdge of redEdges) {
        adj[redEdge[0]].push([redEdge[1], 0]); // Red edge represented by 0
    }
    for (let blueEdge of blueEdges) {
        adj[blueEdge[0]].push([blueEdge[1], 1]); // Blue edge represented by 1
    }

    let ans = new Array(n).fill(-1); // Initialize an array to store the shortest paths
    let visited = new Array(n);
    for (let i = 0; i < n; i++) {
        visited[i] = new Array(2).fill(false); // Initialize a visited array to track visited nodes and colors
    }

    let queue = [[0, 0, -1]]; // Start from node 0 with length 0 and no previous color
    visited[0][0] = true; // Mark node 0 as visited with red color
    visited[0][1] = true; // Mark node 0 as visited with blue color
    ans[0] = 0; // Set the shortest path to node 0 as 0
    
    while (queue.length) {
        let [node, len, prevColor] = queue.shift(); // Get the current node, length, and previous color

        for (let [neighbor, color] of adj[node]) {
            if (visited[neighbor][color] === false && prevColor !== color) {
                // If the neighbor has not been visited with the same color and the color is different from the previous color
                queue.push([neighbor, len + 1, color]); // Add the neighbor to the queue with an increased length and new color
                visited[neighbor][color] = true; // Mark the neighbor as visited with the new color
                if (ans[neighbor] === -1) {
                    ans[neighbor] = len + 1; // Update the shortest path to the neighbor if it is not yet set
                }
            }
        }
    }
    
    return ans; // Return the array containing the shortest paths to each node
};s


const n = 3
const redEdges = [[0, 1], [1, 2]]
const blueEdges = []

console.log(shortestAlternatingPaths(n, redEdges, blueEdges))