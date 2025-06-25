import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function FeedbackForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    feedback: "",
    category: "Suggestion",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/feedback", form);
    alert("Feedback submitted!");
    setForm({ name: "", email: "", feedback: "", category: "Suggestion" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <form onSubmit={handleSubmit}>
        <h2>Submit Feedback</h2>
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} required />

        <label>Email</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Feedback</label>
        <textarea
          name="feedback"
          rows="4"
          value={form.feedback}
          onChange={handleChange}
          required
        />

        <label>Category</label>
        <select name="category" value={form.category} onChange={handleChange}>
          <option>Suggestion</option>
          <option>Bug Report</option>
          <option>Feature Request</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </motion.div>
  );
}

export default FeedbackForm;
