import React, { Component } from "react";
import styles from "./HorizontalPagination.module.css";

class HorizontalPagination extends Component {
  render() {
    let { pages, currentPage, onPageChange } = this.props;

    return (
      <div className={styles.wrapper}>
        {pages.map((page) => {
          return (
            <h3
              key={page.id}
              onClick={() => onPageChange(page.id)}
              className={
                currentPage === page.id
                  ? styles.active
                  : null
              }>
              {page.name}
            </h3>
          );
        })}
      </div>
    );
  }
}

export default HorizontalPagination;
