let express = require("express");
let app = express();

var cookieParser = require('cookie-parser');
app.use(cookieParser());

// Adding Cookies with Expiration Time
// app.get("/",(req, res) => {
//   res.cookie("name" , "express",{maxAge: 3000}).send("cookies Sent");
// })

//Deleting Existing Cookies
app.get('/clear_cookie_foo', function(req, res){
   res.clearCookie('foo');
   res.send('cookie foo cleared');
});

app.listen(3000, console.log("Server is running"));