import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function FeedbackDashboard() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [sort, setSort] = useState("desc");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const query = `?order=${sort}&category=${category}`;
      const res = await axios.get(`http://localhost:5000/feedback${query}`);
      setFeedbacks(res.data);
    };
    fetchFeedbacks();
  }, [sort, category]);

  return (
    <motion.div
      className="dashboard"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Feedback Dashboard</h2>
      <div className="filters">
        <label>
          Sort by Date:
          <select onChange={(e) => setSort(e.target.value)}>
            <option value="desc">Newest First</option>
            <option value="asc">Oldest First</option>
          </select>
        </label>
        <label>
          Category:
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="">All</option>
            <option value="Suggestion">Suggestion</option>
            <option value="Bug Report">Bug Report</option>
            <option value="Feature Request">Feature Request</option>
          </select>
        </label>
      </div>
      {feedbacks.map((fb) => (
        <motion.div
          key={fb._id}
          className="feedback-card"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p>
            <strong>{fb.name}</strong> ({fb.category})
          </p>
          <p>{fb.feedback}</p>
          <small>{new Date(fb.createdAt).toLocaleString()}</small>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default FeedbackDashboard;
