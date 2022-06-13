## Nodes API

An API endpoint returns one or more nodes based on the ID(s) given (comma separated).

Each node contains two keys:

- `id` - a UUID unique to the node
- `child_node_ids` - an array of other node IDs

Example request using comma separated IDs:

```
GET: https://nodes-on-nodes-challenge.herokuapp.com/nodes/ac0e9fe4-8de0-41e6-9656-b07b40194f47,59013ddb-d691-43c8-8274-7c87e1d739b4
```

```json
[
	{
		"id": "ac0e9fe4-8de0-41e6-9656-b07b40194f47",
		"child_node_ids": ["f1f509be-e589-479e-a2d8-04cddbddc154", "9e145221-5a5a-446b-abdd-8092ced6a6cf"]
	},
	{
		"id": "59013ddb-d691-43c8-8274-7c87e1d739b4",
		"child_node_ids": []
	}
]
```

Given a single starting node ID `089ef556-dfff-4ff2-9733-654645be56fe`, write an algorithm to traverse the complete node tree in order to answer the 2 following questions:

1. What is the total number of unique nodes?
2. Which node ID is shared the most among all other nodes?

Please respond with any code you wrote to complete this challenge along with the answers to the 2 questions above. You can use any language / libraries you prefer to complete this challenge.