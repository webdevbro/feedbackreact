import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import { FeedbackContext } from "../context/FeedbackContext";
import { motion } from "framer-motion";

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p className="custom-message">No feedback yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return <FeedbackItem key={item.id} item={item} />;
      })}
    </div>
  );
  /* return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return (
          <motion.div key={item.id} animate={{ opacity: isVisible ? 1 : 0 }}>
            <FeedbackItem item={item} handleDelete={handleDelete} />
          </motion.div>
        );
      })}
    </div>
  ); */
};

FeedbackList.defaults = {
  isVisible: true,
};

export default FeedbackList;
