const express = require("express")
const app = express()

// Packages for uploading a file to Amazon S3
const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

app.get("/aws_form", function(req, res) {
    res.sendFile("aws_form.html", { root: __dirname });
})

app.listen(3000, function(){
    console.log("Listening on port 3000!")
});