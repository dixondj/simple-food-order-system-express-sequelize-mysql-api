const db = require('../models/')


// create main Model
const FoodItem = db.Food



const getAllFoodItem = async (req, res) => {

    try {
        const foodItem = await FoodItem.findAll({})

        const foodItemSelectedData = foodItem.map((item) => ({
            id: item.id,
            itemName: item.itemName,
            itemPrice: item.itemPrice

        }));
        res.status(200).send({
            status: 'OK',
            data: foodItemSelectedData
        })

    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error });
    }

}



module.exports = {
    getAllFoodItem
}