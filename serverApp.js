var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.post('/todos', (req, res) => {
  console.log(req.body.todo);
  res.sendStatus(200);
})

app.get("/temperature", (req, res, next) => {
  res.json(["Tom","Alan"]);
  res.sendStatus(200);
});

app.post("/temperature", (req, res, next) => {
  console.log(req.body.temperature);

  res.json({"intoTheBody": temperature});
  res.sendStatus(200);
});