const fetch = require("node-fetch");

fetch("http://localhost:5000/graphql", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        query: `
            query {
                authors {
                    name
                }
            }
        `,
        variables: {
            now: new Date().toISOString(),
        },
    }),
})
    .then((res) => res.json())
    .then((result) => console.log(JSON.stringify(result)));
