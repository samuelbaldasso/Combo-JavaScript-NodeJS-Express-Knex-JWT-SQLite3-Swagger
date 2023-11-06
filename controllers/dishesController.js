const authorize = require("../middlewares/authorize");
const {knex} = require("knex");

exports.dishes = async (req, res) => {
    try {
        const dishes = await knex('dishes');
        res.json(dishes);
    } catch (error) {
        res.status(500).json({ message: "Could not retrieve dishes" });
    }
};

exports.postDishes = async (req, res) => {
    const { name, description, price, category, imageUrl, ingredients } = req.body;

    try {
        const dish = await knex('dishes').insert({
            name,
            description,
            price,
            category,
            image_url: imageUrl,
            ingredients
        });

        res.status(201).json({ id: dish[0] });
    } catch (error) {
        res.status(500).json({ message: "Could not create dish" });
    }
};