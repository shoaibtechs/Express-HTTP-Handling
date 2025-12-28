const express =  require("express");
const app = express();
const port =  8080;


app.listen(port, ()=>{

    console.log(`The server is listening at port ${port}` );

}) 


app.get("/", (req, res)=>{

    res.send("You contacted the root path");

})


app.get("/register",  (req, res)=>{


    let {user, pass} =  req.query;

    res.send(`Thankyou ${user} for submitting the form using the GET Request `);


})
  

