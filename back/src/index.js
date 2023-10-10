const server = require("./app")
const { conn } = require('./DB_connection');
const PORT = 3001;

conn.sync({force: false}).then(()=>{
    server.listen(PORT, () => {console.log('Server raised in port: ' + PORT);}); 
})



// const http = require("http");/* 
// const data = require("./utils/data"); */
// const {getCharById} = require("./controllers/getCharById")




// http.createServer((req, res)=>{
//     console.log("server is active");
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if(req.url.includes("/rickandmorty/character")){
//         const id = req.url.split("/").at(-1); 
//         getCharById(res, +id)
//         /* const id = req.url.split("/").at(-1); 
//         // const id = parts[parts.length - 1]
//         const ids = data.find(a => a.id === Number(id))
//         res.writeHead(200, {"Content-Type":"application/json"})
//         res.end(JSON.stringify(ids)) */
        
//     }   

// }).listen(3001, "localhost")




