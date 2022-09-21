const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/public/html/video_player.html");
});

app.listen(8080, () => {
  console.log("SERVER ON");
})