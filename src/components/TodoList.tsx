import React from 'react';
import { Todo } from "../model";
import "./styles.css";
import SingleTodo from './SingleTodo';


interface Props{
    todos: Todo[];
    setTodos:  React.Dispatch<React.SetStateAction<Todo[]>>; 
}

 const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
 
    <div className="container">
       <div className="todos">
        <span className="todos_heading">
            Active Tasks
        </span>
        {todos.map((todo) => (
           <SingleTodo 
           todo={todo} 
           key={todo.id}
           todos={todos}
           setTodos={setTodos}
            />
        ))}

       </div>
       <div className="todos_remove">

       </div>


    </div>
 ); 
};

export default TodoList;