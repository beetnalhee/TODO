import { MdAdd } from 'react-icons/md';
import './TodoInsert.css';
import { useState } from 'react';

// 새로운 Todo 항목을 입력하고 추가할 수 있는 컴포넌트
const TodoInsert = function ({addTodoHandler}) {

    const [inputTodo, setInputTodo] = useState('');

    const writeTodo = function(event) {
        setInputTodo(event.target.value);
    }

    const addTodo = function (event) {
        event.preventDefault()
        addTodoHandler(inputTodo);
        setInputTodo('');
    }


    return (
        <form className='TodoInsert' onSubmit={addTodo}>
            <input placeholder='할 일을 입력하세요' value={inputTodo} onInput={writeTodo} />
            <button type='submit' >
                <MdAdd />
            </button>
        </form>
    );
}

export default TodoInsert;