const router= require("express").Router()
const dataapi=require("../controller/control")

router.get("/data",dataapi.data)
router.post("/userdata",dataapi.data1)
router.delete("/delete/:id",dataapi.data2)
router.put("/EditUser/:id",dataapi.data3)


module.exports=router