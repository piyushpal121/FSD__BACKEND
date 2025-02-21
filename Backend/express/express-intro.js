import express from "express";
const app = express(); // creating server 
const port = 3000;

// creating End Point
app.get('/',(req, res) => {
    // res.send("Welcome to Express !");
    res.send("<h1>Welcom to Express</h1>");
    // res.send({"Hello":"Welcome to Express", "New":"This is Exress"});
});

// http://localhost:3000/api?name=Piyush&age=20&rollNo=123
app.get('/api',(req, res) => {
    /*
    // res.send("<h1>Welcom to API</h1>");
    // const data = req.query; // this will get the data from url
    // console.log(data);
    const {name,rollNo} = req.query;
    if(!name) return res.status(400).send("Name is required!");
    else return res.send(`<h3>Welcome To Express ${name} roll-no is ${rollNo}</h3>`);

    // res.send(`<h3>Welcome To Express ${data.name} roll-no is ${data.rollNo}</h3>`)
    // res.send(`<h3>Welcome To Express ${name} roll-no is ${rollNo}</h3>`)
    */

    try {
        const {name, rollNo} = req.query;
        if(!name) return res.status(400).send("Name is required!");
        else return res.send(`<h3>Welcome To Express ${name} roll-no is ${rollNo}</h3>`);
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
});

// myparams method 
/// http://localhost:3000/api/Piyush/121
app.get('/api/:name/:rollNo', (req,res) => {
    try {
        // const data = req.params;
        const {name, rollNo} = req.params;
        res.send(`Welcome ${name} your Roll No is ${rollNo}`)
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
})

app.listen(port, () => console.log(`Server is running on port ${port}`));