import React, { Component } from "react";
import styles from "./Dropdown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

class DropdownType extends Component {
  handleClick = (element) => {
    let el = { ...element };
    let elName = el.name;
    let elId = el.id;
    this.props.onClickType(elName, elId);
  };
  render() {
    const { dropdownData, displayed } = this.props;

    return (
      <div className={styles.dropdown}>
        <button className={styles.dropdownBtn}>
          {displayed}
          <FontAwesomeIcon
            icon={faSortDown}
            className={styles.icon}
          />
        </button>
        <div className={styles.dropdownContent}>
          {dropdownData.map((element) => {
            return (
              <a
                key={element.id}
                onClick={() => this.handleClick(element)}>
                {element.name}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DropdownType;
