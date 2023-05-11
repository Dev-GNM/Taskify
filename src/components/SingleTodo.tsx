import React from 'react'
import { Todo } from "../model";

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; 
};


const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className='todos_single'>
        <span className="todos_single--text">
            {todo.todo}
            <div>
                <span className="icon">

                </span>
                <span className="icon">

                </span>
                <span className="icon">
                    
                </span>
            </div>

        </span>


    </form>
  )
}

export default SingleTodo;