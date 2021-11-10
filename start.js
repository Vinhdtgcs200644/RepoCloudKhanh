var
     express = require("express"),
     path   = require("path"),
     init   = express(),
     routes = require("./routes");

function start(){
     console.log("Initializing everything");
     console.log("Access here : localhost:" + init.get("port") + "/");
}

function configstart(){
     init.set("port", process.env.PORT || 3000); // Adding in port
     init.set("views", path.join(__dirname, "views"));
     init.set("view engine", "ejs");
}

configstart();
init.use(express.static('public'));
init.use(routes);




init.listen(init.get("port"), start);
