const knex = require("knex")(require("../knexfile").development);

exports.getCategories = async (req, res) => {
  try {
    const categories = await knex("categories").select();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Could not retrieve categories" });
  }
};

exports.getCategoriesById = async (req, res) => {
  const { id } = req.params;
  try {
    const categories = await knex("categories").where({ id }).first();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Could not retrieve that category" });
  }
};

exports.addCategory = async (req, res) => {
  const { name, description } = req.body;

  try {
    const category = await knex("categories").insert({ name, description });
    res.status(201).json({ id: category[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Could not add category" });
  }
};

exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    await knex("categories").where({ id }).update({ name, description });
    res.json({ message: "Category updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Could not update category" });
  }
};

exports.deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    await knex("categories").where({ id }).del();
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Could not delete category" });
  }
};
