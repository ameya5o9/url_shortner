const router = express.Router();
const express = require("express");

router.get('/api', (req, res) => {
    console.log('Received');
    res.send('Received');
  });
  

module.exports = router;
