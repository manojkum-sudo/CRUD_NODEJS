


export const error = (err,req,res, next)=>{
    //log the exception
    res.status(500).send('Something failed');
}