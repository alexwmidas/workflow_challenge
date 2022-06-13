import fetch from "node-fetch";

const NODE_URL = 'https://nodes-on-nodes-challenge.herokuapp.com/nodes/';

let allNodes = [];
let usedOnes = [];

const getNodes = async (node_ids) => {
    allNodes = allNodes.concat(node_ids);
    return fetch(NODE_URL + node_ids.join(',')).then(response => response.json());
}

const checkNodeIsAdded = (node) => {
    return !!allNodes.find(node_id => node_id === node.node_id);
}

const getAllNodes = (nodes) => {
    let child_nodes = [];
    nodes.map(node => {
        // check node_id is not already in allNodes
        for(let i = 0; i < node.child_node_ids.length; i ++) {
            if (!checkNodeIsAdded(node.child_node_ids[i])) {
                child_nodes.push(node.child_node_ids[i]);
            } else {
                usedOnes.push(node.child_node_ids[i]);
            }
        }
    })
    if (child_nodes.length > 0) {
        getNodes(child_nodes).then(nodes => {
            getAllNodes(nodes);
        })
    } else {
        console.log("All Nodes=", allNodes, allNodes.length);
        console.log("usedOnes=", usedOnes, usedOnes.length);
    }
}

// Get First Node results
getNodes(['089ef556-dfff-4ff2-9733-654645be56fe']).then(nodes => {
    getAllNodes(nodes);
});