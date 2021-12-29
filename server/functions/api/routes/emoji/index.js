const express = require('express');
const router = express.Router();

router.get('/', require('./emojiGet'));

module.exports = router;
