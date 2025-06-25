const Feedback = require("../models/Feedback");

exports.submitFeedback = async (req, res) => {
  try {
    const { name, email, feedback, category } = req.body;
    const newFeedback = new Feedback({ name, email, feedback, category });
    await newFeedback.save();
    res.status(201).json({ message: "Feedback submitted!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFeedback = async (req, res) => {
  try {
    const { sortBy = "createdAt", order = "desc", category } = req.query;
    const filter = category ? { category } : {};
    const feedbacks = await Feedback.find(filter).sort({
      [sortBy]: order === "asc" ? 1 : -1,
    });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
