const http = require('http');
const axios = require('axios');

const port = 3000;
const server = http.createServer(async (req,res) => {
    console.log("Hello from the server !");
    res.writeHead(200, {'Content-Type':'text/html'});
    // const response = await fetch('https://dummyjson.com/products');
    // const data = await response.json();

    const response = await axios.get('https://dummyjson.com/products');
    const data = response.data.products;
    // console.log(data)
 
    res.end(frontData)

    // res.end(JSON.stringify(data))
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});