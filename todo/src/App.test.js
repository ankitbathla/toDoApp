/* eslint-disable no-unused-vars */
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import App from "./App";
import TodoInput from "./Components/TodoInput";
import Footer from "./Components/Footer";
import { create } from "react-test-renderer";
import TodoList from "./Components/TodoList";

test("initial state", () => {
    const component = create(<App></App>);
    const instance = component.getInstance();
    expect(instance.state.item).toEqual("");
    expect(instance.state.items).toEqual([]);
    expect(instance.state.total).toEqual(0);
    expect(instance.state.id).toEqual(0);
});

test("when form-button is clicked and input text is not empty", () => {
    const component = create(<App></App>);
    const instance = component.getInstance();
    const handle = instance.handleChange({ target: { value: "ankit" } });
    const item = instance.state.item;
    const app = create(
        <TodoInput
            item={item}
            handleChange={handle}
            onSubmit={instance.onSubmit}
        ></TodoInput>
    );
    expect(item).toBe("ankit");
    const button = app.root.findAllByType("button")[0];
    button.props.onClick();
    expect(instance.state.item).toEqual("");
    const todo = create(
        <TodoList
            values={instance.state.items}
            remove={instance.remove}
        ></TodoList>
    );
    const btn = todo.root.findAllByType("button")[0];
    btn.props.onClick();
    expect(instance.state.total).toEqual(0);
});

test("when button is clicked and input text is empty", () => {
    const component = create(<App></App>);
    const instance = component.getInstance();
    const handle = instance.handleChange({ target: { value: "" } });
    const item = instance.state.item;
    const app = create(
        <TodoInput
            item={item}
            handleChange={handle}
            onSubmit={instance.onSubmit}
        ></TodoInput>
    );
    const button = app.root.findAllByType("button")[0];
    button.props.onClick();
    expect(instance.state.isEmpty).toEqual(true);
});

test("clear All", () => {
    const component = create(<App></App>);
    const instance = component.getInstance();
    instance.clearAll();
    expect(instance.state.item).toEqual("");
});
