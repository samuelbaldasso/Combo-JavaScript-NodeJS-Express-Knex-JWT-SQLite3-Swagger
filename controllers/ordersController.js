const {knex} = require("knex");
exports.orders = async (req, res) => {
    const { dishes, total } = req.body;
    const userId = req.user.userId;

    try {
        const orderId = await knex('orders').insert({
            user_id: userId,
            order_date: new Date(),
            status: 'pending',
            total
        });

        const orderDetails = dishes.map(dish => ({
            order_id: orderId[0],
            dish_id: dish.id,
            quantity: dish.quantity
        }));

        await knex('order_details').insert(orderDetails);

        res.status(201).json({ orderId: orderId[0] });
    } catch (error) {
        res.status(500).json({ message: "Could not create order" });
    }
};