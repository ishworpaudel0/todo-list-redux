import { useState } from "react";

export interface TodoList {
    todoEvent: string;
    description: string;
    date: string;
}
export const InitialTodoList : TodoList[] = [
    {
        todoEvent: "Start Todo list",
        description: "Start Adding items to todo list",
        date: "01/01/2022"
    }
]
const useTodoList = () => {
    const [TodoList, setTodoList] = useState<TodoList[]>(InitialTodoList);
    const addListItem = (newItem: TodoList) => {
        setTodoList((prev) => [...prev, newItem]);
    };
    return {
        TodoList,
        addListItem
    }
}
export default useTodoList;