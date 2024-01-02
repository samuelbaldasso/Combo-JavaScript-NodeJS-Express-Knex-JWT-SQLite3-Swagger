const knex = require("knex")(require("../knexfile").development);

exports.dishes = async (req, res) => {
  try {
    const dishes = await knex("dishes");
    res.json(dishes);
  } catch (error) {
    res.status(500).json({ message: "Could not retrieve dishes" });
  }
};

exports.postDishes = async (req, res) => {
  const { name, description, price, category_id, image_url, ingredients } =
    req.body;

  try {
    const dish = await knex("dishes").insert({
      name,
      description,
      price,
      category_id,
      image_url,
      ingredients,
    });

    res.status(201).json({ id: dish[0] });
  } catch (error) {
    res.status(500).json({ message: "Could not create dish" });
  }
};
