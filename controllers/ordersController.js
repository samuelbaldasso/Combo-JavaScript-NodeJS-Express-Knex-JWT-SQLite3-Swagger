const knex = require("knex")(require("../knexfile").development);

exports.orders = async (req, res) => {
  const { total, status, quantity, unit_price } = req.body;
  const userId = req.user.userId;
  const dishes = await knex("dishes").select();

  try {
    const orderId = await knex("orders").insert({
      user_id: userId,
      order_date: new Date(),
      status,
      total,
    });

    const orderDetails = dishes.map((dish) => ({
      order_id: orderId,
      dish_id: dish.id,
      quantity,
      unit_price,
    }));

    await knex("order_details").insert(orderDetails);

    res.status(201).json({ orderId: orderId[0] });
  } catch (error) {
    res.status(500).json({ message: "Could not create order" });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await knex("orders").select();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Could not retrieve orders" });
  }
};
