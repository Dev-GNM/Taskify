import React from 'react';
import { Todo } from "../model";
import "./styles.css";
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';


interface Props{
    todos: Todo[];
    setTodos:  React.Dispatch<React.SetStateAction<Todo[]>>; 
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

 const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }: Props) => {
  return (
 
    <div className="container">
        <Droppable droppableId='TodoList'>
            {(provided) => (
        <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
        <span className="todos_heading">
            Active Tasks
        </span>
        {todos.map((todo, index) => (
           <SingleTodo 
           index={index}
           todo={todo} 
           key={todo.id}
           todos={todos}
           setTodos={setTodos}
            />
        ))}
      </div>
            )}
        </Droppable>
      
        <Droppable droppableId='TodoRemove'>
            {
                (provided) => (
                    <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
                        <span className="todos_heading">
                            Completed Tasks
                        </span>
                        {completedTodos.map((todo, index) => (
                            <SingleTodo 
                            index={index}
                            todo={todo} 
                            key={todo.id}
                            todos={completedTodos}
                            setTodos={setCompletedTodos}
                            />
                        ))}
                    </div>
                )}
        </Droppable>
    </div>
 ); 
};

export default TodoList;


