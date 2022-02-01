import React, { useState, useContext, useEffect } from "react";
import RatingSelect from "./RatingSelect";
import { FeedbackContext } from "../context/FeedbackContext";
import Button from "./shared/Button";
import Card from "./shared/Card";

const FeedbackForm = () => {
  const { addNewFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const handleTextChange = (event) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length < 10) {
      setBtnDisabled(true);
      setMessage("comments should have at least 10 characters.");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = { text: text, rating: rating };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addNewFeedback(newFeedback);
      }
      setText("");
    }
  };

  return (
    <Card reverse={false}>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect
          select={(rating) => {
            setRating(rating);
          }}
        />
        <div className="input-group">
          <input
            type="text"
            placeholder="write a review"
            autoComplete="off"
            onChange={handleTextChange}
            value={text}
          />
          <Button isDisabled={btnDisabled} version="primary" type="submit">
            Send
          </Button>
        </div>
        {message ? <div className="message">{message}</div> : ""}
      </form>
    </Card>
  );
};

export default FeedbackForm;
