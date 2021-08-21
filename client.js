const fetch = require("node-fetch");

async function fetchGraphQL() {
    const response = await fetch("http://localhost:5000/graphql", {
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
    });
    const result = await response.json();
    console.log(result.data.authors);
}

fetchGraphQL();
