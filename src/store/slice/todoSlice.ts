// features/todoSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TodoItem {
    todoEvent: string;
    description: string;
    date: string;
}

const initialState: TodoItem[] = [
    { 
        todoEvent: "Start Todo list", 
        description: "Initial task", 
        date: "2022-01-01" 
    }
];

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TodoItem>) => {
            state.push(action.payload);
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            return state.filter((_, index) => index !== action.payload);
        }
    }
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;