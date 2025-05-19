import express from "express";

var app = express();

app.get("/user", function (req, res) {
  res.send("GET Fetch Data From DataBase");
});

app.post("/user/post", function (req, res) {
  res.send("POST Data From DataBase");
});

app.put("/user/put", function (req, res) {
  res.send("Fetch Data PUT From DataBase");
});

app.delete("/user/delete", function (req, res) {
  res.send("DELETE Data From DataBase");
});

app.listen(3000);
// npm install -g nodemon # or using yarn: yarn global add nodemon for auto restart
