import React from "react";
//helmet is used to manage the head of the page
const Helmet = (props) => {
  document.title = "My Pizza -" + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
