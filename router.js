const Router =  require('express');
const PostController = require("./PostController.js");
const ListController = require("./ListController.js");

const router = new Router()

router.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

router.post('/cards', PostController.create)
router.get('/cards', PostController.getAll)
router.get('/cards/:id', PostController.getOne)
router.put('/cards', PostController.update)
router.delete('/cards/:id', PostController.delete)
router.post('/lists', ListController.create)
router.get('/lists', ListController.getAll)
router.get('/lists/:id', ListController.getOne)
router.put('/lists', ListController.update)
router.delete('/lists/:id', ListController.delete)

module.exports = router;