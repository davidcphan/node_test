var express = require('express');
var router = express.Router();

router.get('/bye', function(req,res){
res.send("Goodbye world");
});

module.exports = router;
