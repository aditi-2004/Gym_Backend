const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/chatbot-data', (req, res) => {
  res.sendFile(path.join(__dirname, '../data/chatbotData.json'));
});

module.exports = router;
