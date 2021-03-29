/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const abc = this.props.values.map((item) => {
            return (
                <li key={item.id}>
                    {item.item}
                    <button onClick={() => this.props.remove(item.id)}>
                        <span className=" icon fa  fa-times lg"></span>
                    </button>
                </li>
            );
        });
        return <ul className="todoList">{abc}</ul>;
    }
}
export default TodoList;
