const express   = require("express");
const router    = express.Router();

router.get("/",(req,res)=>{
    console.log("this is /data");
    res.send("data");
});

module.exports = router;
