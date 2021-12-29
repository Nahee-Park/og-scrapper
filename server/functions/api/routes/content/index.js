const express = require('express');
const router = express.Router();

router.get('/list', require('./contentListGET'));

router.post('/', require('./contentPOST'));
router.put('/restore', require('./contentRestorePUT'));

router.put('/delete/temp', require('./contentSoftDELETE'));
router.delete('/delete/forever', require('./contentHardDELETE'));

module.exports = router;
