const http = require('http'); // Importing HTTP Package
const fs=require('fs/promises');

// Creating Server
const server =  http.createServer(async (req,res) => {
    console.log(req.url);
    req.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Hey !!!</h1>");
    const data = await fs.readFile('./home.html','utf-8')
    res.end(data)
});

// Server listening on port 3000.
port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    // const serverr_address = server.address();
    // console.log(`Server is running on port ${serverr_address.port}`);
});