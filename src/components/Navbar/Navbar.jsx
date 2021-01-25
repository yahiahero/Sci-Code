import React, { Component } from "react";
import Logo from "../../assets/images/logo.png";
import Avatar from "../../assets/images/avatar.png";
import styles from "./Navbar.module.css";
import { getCurrentTime } from "../../utils/getTime";
import { getCurrentDate } from "../../utils/getDate";

class Navbar extends Component {
  state = {
    date: undefined,
    time: undefined,
  };

  componentDidMount() {
    setInterval(() => {
      let { year, month, day } = getCurrentDate();
      this.setState({
        date: `${day}-${month}-${year}`,
      });
    }, 1000);

    setInterval(() => {
      let { hours, minutes, format } = getCurrentTime();
      this.setState({
        time: `${hours}:${minutes} ${format}`,
      });
    }, 1000);
  }

  render() {
    return (
      <nav>
        <div className={styles.logoWrapper}>
          <img
            src={Logo}
            className={styles.mainLogo}
            alt={"logo"}
          />
        </div>
        <div className={styles.linksWrapper}>
          <div className={styles.links}>
            <h1>Account</h1>
            <h1>Charts</h1>
            <h1>Help</h1>
          </div>
          <div className={styles.profile}>
            <img
              src={Avatar}
              className={styles.profileImg}
              alt={"avatar"}
            />
            <h1 className={styles.name}>
              {this.props.user}
            </h1>
            <div className={styles.date}>
              <p>{this.state.date}</p>
              <h1>{this.state.time}</h1>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
