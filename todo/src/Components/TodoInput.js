/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class TodoInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="inputField" data-testid="form">
                <input
                    className="input"
                    type="text"
                    placeholder="Add your new todo"
                    value={this.props.item}
                    onChange={this.props.handleChange}
                ></input>
                <button
                    type="submit"
                    className="form-button"
                    onClick={this.props.onSubmit}
                >
                    <span className="fa fa-plus"></span>
                </button>
            </div>
        );
    }
}

export default TodoInput;
