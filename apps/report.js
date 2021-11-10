const Bill_Data = require("../models/bills");
module.exports = {
     bill : (req,res)=>{
          Bill_Data.find((err,result)=>{
               res.render("bill", {
                    data:result
               });
          });
}};
