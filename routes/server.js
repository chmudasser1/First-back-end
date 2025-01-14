//Server.js

// const http = require('http')

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Contant-Type': 'text/html' });

//     res.write('<h1>hellow,Node.js<h1/>');
//     res.end();
// });

// const port =3000;

// server.listen(port,()=>{
//     console.log(`Node.js HTTP  server is running in the port ${port}`);
// });


//Express.js

// const express = require('express')
// const app = express();

// app.get('/', (req, res) => {
//     res.send('<h1>Hellow,Express.js<h1/>')
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log(`Serveris running on port ${port}`);
// });

//Server.js

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello root node<h1/>')
})

const usersRoute = require('./users');
const productRoutes = require('./products')

app.use('/users', usersRoute)
app.use('/products', productRoutes)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});