var express = require('express');
var router = express.Router();
const Article = require('../controllers/articles')

/* GET users listing. */
router.get('/',Article.viewAll)
router.post('/',Article.create)
router.put('/:id',Article.update)
router.delete('/:id',Article.delete)
module.exports = router;
