const knex = require("knex")(require("../knexfile").development);

exports.addReview = async (req, res) => {
  const { user_id, dish_id, rating, comment } = req.body;

  try {
    const review = await knex("reviews").insert({
      user_id,
      dish_id,
      rating,
      comment,
      review_date: new Date(),
    });
    res.status(201).json({ id: review[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Could not add review" });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const reviews = await knex("reviews").select();
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Could not retrieve reviews" });
  }
};

exports.updateReview = async (req, res) => {
  const { id } = req.params;
  const { rating, comment } = req.body;

  try {
    await knex("reviews").where({ id }).update({
      rating,
      comment,
    });
    res.json({ message: "Review updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Could not update review" });
  }
};

exports.deleteReview = async (req, res) => {
  const { id } = req.params;

  try {
    await knex("reviews").where({ id }).del();
    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Could not delete review" });
  }
};
