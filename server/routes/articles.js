var express = require('express');
var router = express.Router();
const Article = require('../controllers/articles')
const Auth = require('../middleware/auth')

/* GET users listing. */
router.get('/',Article.viewAll)
router.post('/',Auth.admin,Article.create)
router.put('/:id',Article.update)
router.delete('/:id',Auth.admin,Article.delete)
module.exports = router;
