import './TodoItem.css';
import TodoItem from './TodoItem';

// 각 할 일 항목 목록을 보여주는 컴포넌트
const TodoList = function ({todoList, removeTodoHandler}) {
    return (
        <div className='TodoList'>
            {
            todoList.map(todo =>(
            <TodoItem 
            key={todo.num} 
            todo={todo} 
            removeEvent={removeTodoHandler} ></TodoItem>))
            }
        </div>
    );
}

export default TodoList;