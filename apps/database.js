var database, password, username, connection_link;

database = require("mongoose");
password="BPGdLzXrhUtRO9Ls";
username="admin";
connection_link = "mongodb+srv://"+username+":"+password+"@cluster0.eqkgo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

console.log("[Starting the connect !!!]");
console.log("WIth user = " + username);
console.log("With password = "  + password);

function Done(){
     console.log("[Successfully connected to database]");
}
function Error(err){
     console.log("Error happened !!!");
     console.log("-----------");
     console.log(err);
     console.log("-----------");
}

database.connect(connection_link, {useNewUrlParser: true,useUnifiedTopology: true})
.then(Done)
.catch(Error);
