import express from 'express'
import axios from 'axios'


const port=3000;
const app=express();
const URL = "https://rickandmortyapi.com/api/characters?page=2";

app.use(express.static("public"))


app.get("/",async(req,res)=>{

    try{

    const result= await axios.get(URL)
const data= result.data.results


    res.render("index.ejs",{data:data});

    }catch(error){
        console.log(error.message)
        res.render("index.ejs",{error:error})
    }

})


app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})