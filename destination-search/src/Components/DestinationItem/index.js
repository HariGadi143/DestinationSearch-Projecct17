import React, { Component } from "react";
import styles from "./index.module.css";

class DestinationItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { destinationItem } = this.props;

    return (
      <div className={styles.itemCon}>
        <img src={destinationItem?.imgUrl} />
        <h3>{destinationItem?.name}</h3>
      </div>
    );
  }
}

export default DestinationItem;
