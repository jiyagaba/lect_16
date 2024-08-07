function Createerror(status,message)
{
    let error=new Error();
    error.status=status;
    error.message=message;
    return error;

}



function ErrorHandler(err,req,res,next)
{
    let statusCode=err.status||500;
    let message=err.message||"Internal Server Error";
    req.status(statusCode);
    res.send(message);
    // if(err.status)
    // {
    //     res.status(err.status);
    //     res.send(err.message);
    // }
    // else
    // {
    //     err.status=500;
    //     res.status(err.status);
    //     res.send("internal server error")
    // }
}
module.exports={ErrorHandler,Createerror};