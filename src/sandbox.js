import React from "react";

const App = () => {
  const title = "Blog Post";
  const body =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const comments = [
    { id: 1, text: "comment one" },
    { id: 2, text: "comment two" },
    { id: 3, text: "comment three" },
    { id: 4, text: "comment four" },
  ];
  const loading = false;
  const showComments = true;
  if (loading) {
    return <h4>Loading...</h4>;
  }
  return (
    <div className="container">
      <h2>{title.toUpperCase()}</h2>
      <p>{body}</p>
      <div className="comments">
        {showComments ? (
          <>
            <h3>Comments: {comments.length}</h3>
            <ul>
              {comments.map((comment) => {
                return (
                  <li key={comment.id}>
                    {comment.id}: {comment.text}
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default App;
