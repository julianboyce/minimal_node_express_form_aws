const express = require("express")
const app = express()

app.get("/aws_form", function(req, res) {
    res.sendFile("aws_form.html", { root: __dirname });
})

app.listen(3000, function(){
    console.log("Listening on port 3000!")
});