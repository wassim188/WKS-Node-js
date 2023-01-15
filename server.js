const http = require("htt;p")



const server = http.createServer((req,res) =>{
    if (req.uerl==="/"){
        res.write("<h1>Hello Node ..!</h1>");
        res.end();
    }
});
    server.listen(3000,(err) =>{
        if (err) throw err;
        console.log("server is up and running...!");
    });
