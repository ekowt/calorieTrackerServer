var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  res.send('post');
});


router.get('/:id',(req,res)=>
{

})

router.patch('/',(req,res)=>
{

})

router.delete('/:id',(req,res)=>
{

})




module.exports = router;
