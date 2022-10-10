const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/bmicalculator", function (req, res) {
    res.sendFile(`${__dirname}/index.html`);
});

app.post("/bmicalculator", function (req, res) {
    let weight = Number(req.body.weight);
    let feet = Number(req.body.feet);
    let inches = Number(req.body.inches);
    let height = (feet * 12) + inches;

    let result = weight / Math.pow(height, 2) * 703;
    res.send(`Your BMI is ${result.toFixed(1)}.`);
});

app.listen(3000, function() {
    console.log("Server is running on Port 3000");
});