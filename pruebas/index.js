const express = require("express");
require("dotenv").config();
const app = express();

var saludo=(req, res,next)=>{
    console.log("Holaa");
    next();
}   //saludo();

app.use((req,res,next)=>{
    console.log("Middelware para todas las rutas");
    next();
})

app.get("/",saludo,(req,res)=>{
    res.send("Estas en la raiz");
});

app.get("/home", (req,res)=>{
    res.send("Estas en home");
})

app.get("/trabajo", (req,res)=>{
    res.send("Estas en trabajo");
})

const port =process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("servidor corriendo en http://localhost:"+port);

});
