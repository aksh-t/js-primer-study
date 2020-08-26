import { TodoListModel } from "./model/TodoListModel.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
import { TodoListView } from "./view/TodoListView.js";
import { render } from "./view/html-util.js";

export class App {
    constructor() {
        this.todoListModel = new TodoListModel();
    }

    handleAdd(title) {
        this.todoListModel.addTodo(new TodoItemModel({ title, completed: false }));
    }

    handleUpdate({ id, completed }) {
        this.todoListModel.updateTodo({ id, completed });
    }

    handleDelete({ id }) {
        this.todoListModel.deleteTodo({ id });
    }

    handleChange() {
        const containerElement = document.querySelector("#js-todo-list");
        const todoItemCountElement = document.querySelector("#js-todo-count");

        const todoItems = this.todoListModel.getTodoItems();
        const todoListView = new TodoListView();

        const todoListElement = todoListView.createElement(todoItems, {
            onUpdateTodo: ({ id, completed }) => {
                this.handleUpdate({ id, completed });
            },
            onDeleteTodo: ({ id }) => {
                this.handleDelete({ id });
            }
        });
        render(todoListElement, containerElement);
        todoItemCountElement.textContent = `Todoアイテム数: ${this.todoListModel.getTotalCount()}`;
    }

    handleSubmit(event) {
        const inputElement = document.querySelector("#js-form-input");

        event.preventDefault();

        if (inputElement.value === "") {
            return;
        }

        this.handleAdd(inputElement.value);
        inputElement.value = "";
    }

    mount() {
        const formElement = document.querySelector("#js-form");

        this.todoListModel.onChange(this.handleChange);
        formElement.addEventListener("submit", this.handleSubmit);
    }

    unmount() {
        const formElement = document.querySelector("#js-form");
        this.todoListModel.offChange(this.handleChange);
        formElement.removeEventListener("submit", this.handleSubmit);
    }
}