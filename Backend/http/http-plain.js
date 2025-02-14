const http = require('http'); // Importing HTTP Package
const fs=require('fs/promises');
const { json } = require('stream/consumers');

// const users = [
//     {
//         id:1,
//         name:'Ayush',
//         email:'ayush@gmail.in'
//     },
//     {
//         id:2,
//         name:'Suresh',
//         email:'suresh@gmail.in'
//     },
//     {
//         id:3,
//         name:'Rahul',
//         email:'rahul@gmail.in'
//     }
// ]
// Creating Server
// createServer is a method to create server and we pass a async callback fn inside it.
const server =  http.createServer(async (req,res) => {
    console.log(req.url);
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    
    // we can do statuscode and setheader together using writeHead method
    // res.writeHead(200, 'Content-Type','text/plain');

    // res.write("<h1>Hey !!!</h1>");
    // const data = await fs.readFile('./home.html','utf-8')
    // res.end(data)

    //For sending JSON data
    // res.writeHead(200, 'Content-Type','application/json');
    // res.end(JSON.stringify(users))
    // res.end(JSON.stringify(users[2]))
    
    // printing all  users name
    // const data = users.map((user)=>{return user.name})
    // res.end(JSON.stringify(data))

    // let data = ""
    // users.forEach((user)=>{data+=user.name+' '})
    // res.end(JSON.stringify(data))

    // const data = await fs.readFile("./data.json","utf-8")
    // const users = JSON.parse(data)
    // res.end(JSON.stringify(users))

    // rendering with logic
    if (req.url == '/'){
        res.writeHead(200, 'Content-Type','application/json');
        const data = await fs.readFile("./data.json","utf-8");
        const users = JSON.parse(data);
        res.end(JSON.stringify(users))
    }
    else if(req.url == '/home'){
        res.writeHead(200, 'Content-Type','text/html');
        const data = await fs.readFile('./home.html','utf-8');
        res.end(data);
    }
    else{
        res.writeHead(200, 'Content-Type','text/html');
        const data = await fs.readFile('./error.html','utf-8');
        res.end(data);
    }
});

// Server listening on port 3000.
port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    // const serverr_address = server.address();
    // console.log(`Server is running on port ${serverr_address.port}`);
});