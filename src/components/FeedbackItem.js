import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FeedbackContext } from "../context/FeedbackContext";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Card from "./shared/Card";

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card reverse={false}>
      <div className="num-display">
        <span>{item.rating}</span>
      </div>
      <div className="text-display">{item.text}</div>
      <div className="editIcon">
        <AiFillEdit
          onClick={() => {
            editFeedback(item);
          }}
        />
      </div>
      <div className="deleteIcon">
        <AiFillDelete
          onClick={() => {
            deleteFeedback(item.id);
          }}
        />
      </div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
