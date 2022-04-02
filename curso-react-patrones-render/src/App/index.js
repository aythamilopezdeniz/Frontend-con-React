import React from "react";
import { useTodos } from './useTodos';
import { TodoList } from "../TodoList";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { TodoHeader } from "../TodoHeader";
import { ChangeAlert } from "../ChangeAlert";

function App() {
    const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal, 
        totalTodos, completedTodos, searchValue, setSearchValue, addTodo, syncronizeTodos } = useTodos();

    return(
        <React.Fragment>
            <TodoHeader loading={loading}>
                <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
                <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            </TodoHeader>
            
            <TodoList
                error={error}
                loading={loading}
                totalTodos={totalTodos}
                searchedTodos={searchedTodos}
                searchText={searchValue}
                onError={() => <TodosError />} 
                onLoading={() => <TodosLoading />} 
                onEmptyTodos={() => <EmptyTodos />}
                onEmptySearchResults={(searchText) => <p>No hay resultados para {searchText}</p>}
                // render={todo => (
                //     <TodoItem key={todo.text} text={todo.text} completed={todo.completed} 
                //     onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
                // )}
            >
                {todo => (
                    <TodoItem key={todo.text} text={todo.text} completed={todo.completed} 
                    onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
                )}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
                </Modal>
            )}
            
            <CreateTodoButton setOpenModal={setOpenModal} />

            <ChangeAlert syncronize={syncronizeTodos} />
        </React.Fragment>
    );
}

export default App;