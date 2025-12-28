const express =  require("express");
const app = express();
const port =  8080;


// Middle so that express should be able to understands the URl-Encoded Data 
app.use(express.urlencoded({extended:true})); 




// Middle so that express should be able  understands the JSON  Data 
app.use(express.json());




app.listen(port, ()=>{

    console.log(`The server is listening at port ${port}` );

}) 



app.get("/", (req, res)=>{

    res.send("You contacted the root path");

})

  

app.post("/register", (req, res)=>{

    console.log(req.body);

    //storing the the form data that came from the client 

    let {user, pswd} =  req.body;
      
    res.send(`Thank You  ${user} for submitting the form using the POST method`);


})