import React, { Component } from "react";
import styles from "./GenderSort.module.css";
import DropdownGender from "../DropdownMenu/./Sort/GenderSort/Dropdown";
import DropdownType from "../DropdownMenu/./Sort/TypeSort/Dropdown";

class GenderSort extends Component {
  handleClickGender = (displayedGender, displayedId) => {
    this.props.onClickGender(displayedGender, displayedId);
    // this.props.
  };

  handleClickType = (displayedType, displayedId) => {
    this.props.onClickType(displayedType, displayedId);
  };

  render() {
    const {
      selectGender,
      selectType,
      displayedGender,
      displayedType,
      displayedValue,
      //   onClickGender,
      //   onClickType,
    } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.nameWrapper}>
          <h2 className={styles.name}>By Gender</h2>
        </div>
        <div className={styles.dropdownWrapper}>
          <DropdownGender
            dropdownData={selectGender}
            displayed={displayedGender}
            className={styles.gederDropdown}
            // Passing Gender Change to Homepage Component
            onClickGender={(displayedGender, displayedId) =>
              this.handleClickGender(
                displayedGender,
                displayedId
              )
            }
          />
        </div>
        <div className={styles.dropdownWrapper}>
          <DropdownType
            dropdownData={selectType}
            displayed={displayedType}
            className={styles.typeDropdown}
            // Passing Type Change to Homepage Component
            onClickType={(displayedType, displayedId) =>
              this.handleClickType(
                displayedType,
                displayedId
              )
            }
          />
        </div>
        <div className={styles.valueWrapper}>
          <h2>{displayedValue}</h2>
        </div>
      </div>
    );
  }
}

export default GenderSort;
