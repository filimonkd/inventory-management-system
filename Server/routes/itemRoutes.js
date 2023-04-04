const express = require('express')
const itemController = require('../controllers/itemController')

const router = express.Router()

//localhost:3000
router
    .route("/")
    .get(itemController.getAllItems)
    .post(itemController.addItem)


router
    .route("/:id")
    .get(itemController.getOneItem)
    .patch(itemController.updateItem)
    .delete(itemController.deleteItem)

module.exports = router;
