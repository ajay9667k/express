const userdata=[];
const data=(req,res)=>{
  res.send(userdata)
    
}

const data1=(req,res)=>{
   userdata.push(req.body)
   res.send("data insert")
}
const data2=(req,res)=>{
  const rety=  req.params.id
  userdata.splice(rety,1)
}
const data3=(req,res)=>{
  const put= req.params.id
  const vt=req.body
  const rt=vt.Name
  userdata.splice(put,1,rt)
  
}
module.exports={
    data,
    data1,
    data2,
    data3
}