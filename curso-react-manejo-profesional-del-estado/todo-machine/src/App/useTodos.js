import React from "react";
import { useLocalStorage } from "./useLocalStorage"

function useTodos() {
    const {item: todos, saveItem: saveTodos, loading, error, syncronizeItem: syncronizeTodos} = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        })
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false
        });
        saveTodos(newTodos);
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newItem = [...todos];
        newItem[todoIndex].completed = true;
        saveTodos(newItem);
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newItem = [...todos];
        newItem.splice(todoIndex, 1);
        saveTodos(newItem);
    }

    const states = { loading, error, totalTodos, completedTodos, searchValue, searchedTodos, openModal };
    
    const statesUpdaters = { setSearchValue, addTodo, completeTodo, deleteTodo, setOpenModal, syncronizeTodos };

    return { states, statesUpdaters };

    // return(
    //     {loading, error, totalTodos, completedTodos, searchValue, setSearchValue, searchedTodos, 
    //         addTodo, completeTodo, deleteTodo, openModal, setOpenModal, syncronizeTodos}
    // );
}

export { useTodos };