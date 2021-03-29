/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="footer">
                <span>
                    <span className="pendingTasks"></span>{" "}
                    {this.props.total !== 0 ? (
                        <p>pending tasks</p>
                    ) : (
                        <p>You don't have pending tasks</p>
                    )}
                </span>
                <button className="footer-button" onClick={this.props.clearAll}>
                    Clear All
                </button>
            </div>
        );
    }
}
export default Footer;
