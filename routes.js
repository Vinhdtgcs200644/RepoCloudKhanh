var express, bodyparser, _report, _admin, product, cartfile, database;

express    = require("express");
bodyparser = require("body-parser");
_report    = require("./apps/report.js");
_admin     = require("./apps/admin.js");
product    = require("./apps/product.js");
cartfile   = require("./apps/cart.js");
database   = require("./apps/database.js");

var routing_here = express.Router();
var urlencodedParser = bodyparser.urlencoded({extended:false});

// Viewing products here
routing_here.get("/product" , product._ProdList_);

// Editing and updating information about products here
routing_here.get(
     "/productedit",
      product._ProdManage_);
routing_here.post(
     "/productedit",
     urlencodedParser,
     product._Product_Update
);
routing_here.post(
     "/upload",
     product.upload.single('image'),
     urlencodedParser,
     product._AddProduct_
);

// THings about administrator and employees here
routing_here.get(
     "/manage"   ,
     _admin._AdminP_
);
routing_here.post(
     "/manage",
     urlencodedParser,
     _admin._UpdateAd_
);
routing_here.get(
     "/employee"    ,
     _admin._StaffPage_
);

// Checking available bills which have been made here
routing_here.get(
     "/bill"  ,
     _report.bill
);

// Adding items to cart here
routing_here.get(
     "/cart"    ,
     cartfile._CartPage_
);
routing_here.post(
     "/cart",
     urlencodedParser,
      cartfile._UpdateCart_
);

// Searching product here
routing_here.get(
     "/search",
     product._SearchProd_);
routing_here.post(
     "/search",
     urlencodedParser,
     product._SearchAnalyze_
);


routing_here.get("/"     , (req,res)=>{
     res.render("index");
});
routing_here.get("/home" , (req,res)=>{
     res.render("index");
});
routing_here.get("/about", (req,res)=>
{
     res.render("index");
});

module.exports = routing_here; // exporting necessary things
