const foodItemController = require("../controllers/foodItemController.js")
const orderItemController = require("../controllers/ordersController.js")


// router
const router = require('express').Router()


router.get('/getProductList', foodItemController.getAllFoodItem)
router.post('/createOrder', orderItemController.createOrder)
router.put('/updateOrderStatus', orderItemController.updateOrderStatus)
router.post('/getOrderList', orderItemController.getOrderList)
router.delete('/deleteOrder', orderItemController.deleteOrder)


module.exports = router;