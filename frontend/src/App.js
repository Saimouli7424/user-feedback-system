import React from "react";
import FeedbackForm from "./components/feedbackForm";
import FeedbackDashboard from "./components/feedbackDashboard";
import "./App.css";

function App() {
  return (
    <div className="container">
      <FeedbackDashboard />
      <FeedbackForm />
    </div>
  );
}

export default App;
