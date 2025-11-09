import {configureStore, createSlice} from "@reduxjs/toolkit"

const todoSlice = createSlice(
    {
        name: "todo",
        initialState: [
            { id: 1, text: "Faire les courses", done: false },
            { id: 2, text: "Ménage !", done: true }            
        ],
        reducers: {
            addTask:(state, action) => {
                // {type:"todo/addTack", payload: "aller faire les course"}
                const newTask = {
                    id: Date.now(),
                    text: action.payload,
                    done: false,
                };
                state.push(newTask);
            },
            toggleTask:(state, action) => {
                //{type:"todo/toogleTask", payload:20}
                const task = state.find(t => t.id === action.payload);
                task.done = !task.done;
            },
            deleteTask:(state, action) => {
                return state.filter(t => t.id !== action.payload)
            },
        }
    }
);

export const store = configureStore({
    reducer:{
        todo: todoSlice.reducer
    }
})


