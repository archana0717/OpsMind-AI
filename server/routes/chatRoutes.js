const express = require("express");
const router = express.Router();

const knowledgeBase = {
  "refund policy": "Refunds are processed within 5-7 business days.",
  "leave policy": "Employees are allowed 12 casual leaves per year.",
  "working hours": "Working hours are from 9 AM to 6 PM."
};

router.post("/ask", (req, res) => {
  const { question } = req.body;

  const answer =
    knowledgeBase[question.toLowerCase()] ||
    "Sorry, I don't have information on that.";

  res.json({ answer });
});

module.exports = router;