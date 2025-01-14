import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);  // get the resolved path to the file
const __dirname = path.dirname(__filename);  // get the name of the directory
const port = 4030;

console.log(__dirname);

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
});


app.all("*",(req,res)=>{
   res.status(404).json({error:"routes is not found"}); 
});



app.listen(port,()=>{
    console.log(` ***  app is running on port ${port} *** `)
})
