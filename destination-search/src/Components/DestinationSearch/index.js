import React, { Component } from "react";
import styles from "./index.module.css";
import DestinationItem from "../DestinationItem";

class DestinationSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
    };
  }

  handleChangeInput = (event) => {
    this.setState({ inputVal: event.target.value });
  };

  render() {
    const { destinationList } = this.props;
    const { inputVal } = this.state;
    let updatedList = destinationList.filter((item) =>
      item.name.toLowerCase().includes(inputVal.toLowerCase())
    );

    console.log(updatedList);
    return (
      <div className={styles.mainContainer}>
        <div className={styles.destinationWrapper}>
          <h1>Destination Search</h1>
          <input
            value={inputVal}
            onChange={this.handleChangeInput}
            placeholder="Search"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="Search Icon"
            // style={{ padding: "10px" }}
          />
          <div className={styles.itemsWrapper}>
            {updatedList.map((item) => {
              return <DestinationItem destinationItem={item} key={item?.id} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default DestinationSearch;
