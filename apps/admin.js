const staff = require("../models/employee");
module.exports = {
     _AdminP_ : (req,res)=>{

          res.render("admin",{
               checkvar:2,
               data:["0","0","0","0","0"]
          }
     );},
     _UpdateAd_ : Update,
     _StaffPage_:(req, res)=>{

          staff.find((error, data)=>{
               if(error){
                    console.log("Error detected");
                    console.log(error);
                    res.send("Something went wrong");
                    return
               }
               console.log(data);

               res.render("employee", {data:data});
          });
     }
};
function Update(req, res){

     var fullname, age, phone, addr, email;

     if(!req.body){return res.sendStatus(400);}

     if(req.body.category=="0"){

          fullname = req.body.fullname;
          age      = req.body.age;
          phone    = req.body.phone;
          addr     = req.body.addr;
          email    = req.body.email;

          const addnew = new staff({fullname:fullname,Age:Number(age), phone:phone,Address:addr,email:email});
          addnew.save()
          .then((result)=>{
               res.render("admin",{
                    checkvar:5,
                    data:["0","0","0","0","0"]
               });
               return;
          }).catch((err)=>{
               res.status(400);
               res.send("Unexpected error happened");
               return;
          });

     }else{
          if(req.body.fullname==""){
               res.render("admin", {
                    checkvar:2,
                    data:["0","0","0","0","0"]
               });
               return;
          }

          if(req.body.prove_=="Check"){
               staff.find({fullname:req.body.fullnameN}, (error, data)=>{
                    if(error){
                         console.log(error);
                         return;
                    }else{
                         if(data.length==0){
                              res.render("admin", {checkvar:3,data:["0","0","0","0","0"]});
                              return;
                         }
                         var array = [];
                         array.push(data[0].fullname);
                         array.push(data[0].phone);
                         array.push(data[0].Age);
                         array.push(data[0].Address);
                         array.push(data[0].email);
                         console.log(array);
                         res.render("admin", {
                              checkvar:4,
                              data:array
                         });
                    }
               });
          }else if(req.body.prove_=="Delete"){

               var fullname_ = req.body.fullnameN;

               staff.findOneAndRemove({fullname:fullname_}, function(err){
                    if(err){
                         console.log(err);
                         return res.status(500).send();
                    }else{
                         res.render("admin",{checkvar:6,data:["0","0","0","0","0"]});
                         return
                    }
               });

          }else{
               var fullname_ = req.body.fullnameN;
               var age_ = req.body.ageN;
               var phone_ = req.body.phoneN;
               var addr_ = req.body.addressN;
               var email_ = req.body.emailN;

               console.log(fullname_);
               console.log(age_);
               console.log(phone_);
               console.log(addr_);
               console.log(email_);

               staff.findOneAndUpdate({fullname:fullname_},{
                    fullname:fullname_,
                    Age:Number(age_),
                    phone:phone_,
                    Address:addr_,
                    email:email_
               }).then((result)=>{
                    res.render("admin",{ checkvar:7,data:["0","0","0","0","0"]});
                    return;
               }).catch((err)=>{
                    console.log(err);
                    res.status(400);
                    return;
               });

          }

     }
}

// function AdminPanel(req,res){
//
//      res.render("admin",{
//           checkvar:2,
//           data:["0","0","0","0","0"]
//      });
// }
//
// function StaffPage(req, res){
//
//      staff.find((error, data)=>{
//           if(error){
//                console.log("Error detected");
//                console.log(error);
//                res.send("Something went wrong");
//                return
//           }
//           console.log(data);
//
//           res.render("employee", {data:data});
//      });
// }
