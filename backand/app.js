const express= require("express");
const app= express()
const apirouter= require("./router/api")
app.use(express.json())

app.use("/api",apirouter)











const PORT=5000;
app.listen(PORT,()=>{
    console.log(`RUNNING PORT ON ${PORT}`)
})