const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/chat", require("./routes/chatRoutes"));

app.listen(5001, () => {
  console.log("OpsMind Server running on port 5001");
});