const router= require("express").Router()
const dataapi=require("../controller/control")

router.get("/data",dataapi.data)

router.post("/userdata",dataapi.data1)


module.exports=router