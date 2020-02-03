import React from "react";
import "./ListItem.css";

function ListItem(props) {
  return (
  <div className="item-wrapper">
      <h3>{props.post.title.toUpperCase()}</h3>
  </div>
  )
}

export default ListItem;
