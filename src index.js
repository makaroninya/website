const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
    // Set response HTTP headers
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Simple HTML content
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Simple Node.js Website</title>
        </head>
        <body>
            <h1>Welcome to My Simple Website</h1>
            <p>This website is powered by Node.js!</p>
        </body>
        </html>
    `);
});

// Define the port
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
