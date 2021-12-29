const express = require('express');
const router = express.Router();

router.use('/emoji', require('./emoji'));
router.use('/content', require('./content'));

module.exports = router;
