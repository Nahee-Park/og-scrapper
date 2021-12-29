const express = require('express');
const router = express.Router();

router.get('/list', require('./contentListGET'));

router.post('/', require('./contentPOST'));
router.put('/', require('./contentRestorePUT'));

router.put('/', require('./contentSoftDELETE'));
router.delete('/:id', require('./contentHardDELETE'));

module.exports = router;
