const express = require('express');
const router = express.Router();

router.get('/list', require('./contentListGET'));

router.post('/', require('./contentPOST'));
router.put('/restore', require('./contentRestorePUT'));

router.put('/delete/soft', require('./contentSoftDELETE'));
router.delete('/delete/hard/:id', require('./contentHardDELETE'));

module.exports = router;
