const userdata=[];
const data=(req,res)=>{
  res.send(userdata)
    
}

const data1=(req,res)=>{
   userdata.push(req.body)
   res.send("data insert")
}
module.exports={
    data,
    data1
}