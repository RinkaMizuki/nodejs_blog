const express = require("express");
const app = express();
const port = 8080;

app.get("/home", (req, res) => {
    
    var a = 1;
    var b = 2;

    var total = a + b;
    res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
