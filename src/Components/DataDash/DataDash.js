import React, { useEffect } from "react";
import "./DataDash.css";
import ListItem from "../ListItem/ListItem";
import { getPlaceholderData } from "../../helperFunctions";

function DataDash() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    getPlaceholderData().then(extractedData => {
      setData(extractedData);
      console.log(extractedData);
    });
    // setData(getPlaceholderData());
    // console.log(getPlaceholderData());
  }, []);

  if (data && data.length > 1) {
    return (
      <div className="data-dash-wrapper">
        {data.map(post => {
          return <ListItem post={post} />;
        })}
      </div>
    );
  } else return null;
}

export default DataDash;
