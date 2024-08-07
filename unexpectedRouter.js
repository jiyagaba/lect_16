//Here we are creating middleware
function UnexpectedRouteHandler(req,res,next)
{
    //route come on req
    let route=req.url;
    res.status(404);
    res.send(`${route} not found`);
    //next()
    //we will use next when we have send request to next router
}
module.exports=UnexpectedRouteHandler;