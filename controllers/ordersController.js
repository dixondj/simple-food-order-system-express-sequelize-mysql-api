
const { v4: uuid } = require('uuid')
const db = require('../models/')


// create main Model
const Orders = db.Orders
const OrderItem = db.OrderItem
const FoodItem = db.Food



const createOrder = async (req, res) => {

    let emptyCount = 0;

    Object.entries(req.body).forEach((item) => {
        if (item[1] === '') emptyCount++;
    });
    if (emptyCount > 0) {
        return res.status(400).json({ status: 'Error', message: 'The required parameters are not found in the request body' });

    } else {
        const { customerName, foodItem, qty } = req.body
        try {
            const customerNameExist = await Orders.findAll({
                where: {
                    customerName,
                },
            });

            if (customerNameExist.length > 0) {

                return res.status(400).json({ status: 'Error', message: 'Name Exist!' })

            } else {

                const checkFoodItemExist = await FoodItem.findAll({
                    where: {
                        itemName: foodItem,
                    },
                });

                if (checkFoodItemExist.length > 0) {
                    const TotalPrice = checkFoodItemExist[0].itemPrice * qty
                    const assignOrderId = uuid()
                    const pendingPayment = "PENDING PAYMENT"

                    await Orders.create({
                        id: assignOrderId,
                        customerName,
                        orderItem: foodItem,
                        qty,
                        totalPrice: TotalPrice,
                        status: pendingPayment,
                        createdAt: new Date(),
                    });

                    await OrderItem.create({
                        id: uuid(),
                        qty,
                        foodId: checkFoodItemExist[0].id,
                        orderId: assignOrderId,
                        createdAt: new Date(),
                    });

                    res.status(200).send({
                        status: 'OK',
                        message: 'Successfully added to the Order List'
                    })

                } else {
                    return res.status(400).json({ status: 'Error', message: 'this Food Item does not exist' })
                }

            }

        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: error });
        }
    }


}




const getOrderList = async (req, res) => {
    let emptyCount = 0;

    Object.entries(req.body).forEach((item) => {
        if (item[1] === '') emptyCount++;
    });
    if (emptyCount > 0) {
        return res.status(400).json({ status: 'Error', message: 'The required parameters are not found in the request body' });

    } else {
        const { customerName } = req.body

        try {
            const getOrderListByName = await Orders.findAll({
                where: {
                    customerName,
                },
                include: [
                    {
                        model: FoodItem,
                    },
                ],
            });

            const filterData = getOrderListByName.map((item) => ({
                orderId: item.id,
                orderItem: item.orderItem,
                itemPrice: item.Food[0].itemPrice,
                totalPrice: item.totalPrice,
                status: item.status

            }));


            res.status(200).send({
                status: 'OK',
                customerName,
                data: filterData
            })

        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: error });
        }
    }


}


const updateOrderStatus = async (req, res) => {

    let emptyCount = 0;

    Object.entries(req.body).forEach((item) => {
        if (item[1] === '') emptyCount++;
    });
    if (emptyCount > 0) {
        return res.status(400).json({ status: 'Error', message: 'The required parameters are not found in the request body' });

    } else {
        const { customerName } = req.body
        try {
            await Orders.update({
                status: "paid",
            }, {
                where: {
                    status: ["PENDING PAYMENT"],
                    customerName: customerName
                },
            });

            res.status(200).send({
                status: 'OK',
                message: 'Successfully Paid for Order!'
            })

        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: error });
        }
    }


}



const deleteOrder = async (req, res) => {

    let emptyCount = 0;

    Object.entries(req.body).forEach((item) => {
        if (item[1] === '') emptyCount++;
    });
    if (emptyCount > 0) {
        return res.status(400).json({ status: 'Error', message: 'The required parameters are not found in the request body' });

    } else {
        const { customerName, orderId } = req.body

        try {

            const foundOrderId = await Orders.findAll({
                where: {
                    id: orderId,
                    customerName
                },
            });

            if (foundOrderId.length > 0) {
                await Orders.destroy({
                    where: {
                        customerName,
                        id: orderId
                    }
                })

                res.status(200).send({
                    status: 'OK',
                    message: 'Successfully deleted Order!'
                })

            } else {
                return res.status(400).json({ status: 'Error', message: 'Invalid OrderId or Name' });
            }

        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: error });
        }
    }


}



module.exports = {
    createOrder,
    getOrderList,
    updateOrderStatus,
    deleteOrder
}