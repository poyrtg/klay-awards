const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname)); // чтобы отдавать html/css/js

const votesFile = "votes.json";

// Получить все голоса
app.get("/votes", (req, res) => {
  fs.readFile(votesFile, "utf8", (err, data) => {
    if(err) return res.json({});
    res.json(JSON.parse(data));
  });
});

// Добавить голос
app.post("/vote", (req, res) => {
  const { category, nominee } = req.body;
  if(!category || !nominee) return res.status(400).send("Invalid request");

  fs.readFile(votesFile, "utf8", (err, data) => {
    let votes = {};
    if(!err) votes = JSON.parse(data);

    votes[category] = votes[category] || {};
    votes[category][nominee] = (votes[category][nominee] || 0) + 1;

    fs.writeFile(votesFile, JSON.stringify(votes, null, 2), err => {
      if(err) return res.status(500).send("Error saving vote");
      res.json({ success: true, votes: votes[category] });
    });
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));