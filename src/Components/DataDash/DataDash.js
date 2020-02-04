import React, { Component } from "react";
import "./DataDash.css";
import { CircleLoader } from "react-spinners";
import ListItem from "../ListItem/ListItem";
import { getPlaceholderData } from "../../helperFunctions";

class DataDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  setData = data => {
    this.setState({ data });
  };

  async componentDidMount() {
    await getPlaceholderData().then(extractedData => {
      this.setData(extractedData);
    });
  }

  render() {
    const { data } = this.state;

    if (data && data.length > 1) {
      return (
        <div className="data-dash-wrapper">
          {data.map((post, i) => {
            return <ListItem post={post} key={i} />;
          })}
        </div>
      );
    } else
      return (
        <div id='loading-container' style={{ marginTop: "75px" }}>
          <CircleLoader size={200} color={"lightblue"} />
        </div>
      );
  }
}

export default DataDash;
