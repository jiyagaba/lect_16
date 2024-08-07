const express = require("express");
const UnexpectedRouteHandler = require("./unexpectedRouter");
const logger=require("./logger");
//object destructure
const {ErrorHandler, Createerror}=require("./errorhandlingmiddleware");
const app = express();
//Application level middleware to handle logs
app.use(logger);
//if any error comes in the file or route we use error,error comes at route handler

//let error=new Error();
// console.log(error);
let mypassword=123456;
app.get("/get/:password", (req, res,next) => {
    let password=req.params.password;
    //console.log(req.params.id);
    // if(req.params.id=='123')
    // {
    //     next(Createerror(401,"Do not type it again"))
    // }
    // else
    // {
    //     res.send("Applicationlevel Get request");
    //}
    if(password==mypassword)
    {
        res.send("Application level get request successfully received");
    }
    else
    {
        next(Createerror(401,"Do not type it again"));
    }
})
app.post("/post", (req, res) => {
    res.send("Applicationlevel post request");
})
app.put("/put", (req, res) => {
    res.send("Applicationlevel put request");
})
app.patch("/patch", (req, res) => {
    res.send("Applicationlevel patch request");
})
app.delete("/delete", (req, res) => {
    res.send("Applicationlevel delete request");
})
//Now we have to use middleware at application level for unexpected route handling
//We keep it down so that it see all other route
//* will not give route name
app.use(UnexpectedRouteHandler);
app.use(ErrorHandler);
const port=3333;
app.listen(port,(err)=>
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(`Server is running on the port:${port}`);
    }
});
//unexprect route:route we did not handle or  mention
//post 123 give error so we use middleware so that server serve properly and do not show any error to the client (No html page should come)
