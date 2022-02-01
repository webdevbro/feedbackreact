import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 5,
      text: "Item coming from context",
    },
    {
      id: 2,
      rating: 2,
      text: "These assholes will fucking pay!",
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  /* ADD FEEDBACK */
  const addNewFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };
  /* DELETE FEEDBACK */
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure?")) {
      setFeedback(
        feedback.filter((item) => {
          return item.id !== id;
        }),
      );
    }
  };
  /* SET ITEM TO BE UPDATED */
  const editFeedback = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  };
  /* UPDATE FEEDBACK ITEM */
  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) => {
        return item.id === id ? { ...item, ...updatedItem } : item;
      }),
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        addNewFeedback: addNewFeedback,
        deleteFeedback: deleteFeedback,
        editFeedback: editFeedback,
        feedbackEdit: feedbackEdit,
        updateFeedback: updateFeedback,
      }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export { FeedbackContext, FeedbackProvider };
