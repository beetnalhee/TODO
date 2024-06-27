import { useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';


// 테스트를 위한 대량의 더미데이터 생성 및 반환을 위한 임시 함수 정의
const createDummyTodoList = function () {
  const dumyArray = [];
  for (let i = 1; i <= 5; i++) {
    dumyArray.push({ num: i, todoText: `해야할 일 : ${i}`, complete: false });
  }
  return dumyArray;
}
function App() {
  
  // const dummyTodo = [
  //   { num: 1, todoText: "끝내주게 숨쉬기", complete:true },
  //   { num: 2, todoText: "끝내주게 잠자기", complete:false },
  //   { num: 3, todoText: "끝", complete:false }
  // ];

  //구조분해할당(destructure)
  //let a,b = [10, 100]
  const [todoList, setTodoList] = useState(createDummyTodoList());

  const addTodoFire = function(todoText){
    const todo = { num: App.todoId++, todoText:todoText, complete:false };
    setTodoList([...todoList, todo]); //spread 연산자
  }

  const removeTodoFire = function(num){
    const newTodoList = todoList.filter(todo => todo.num !== num);
    setTodoList(newTodoList);
  }

  return (
    <TodoTemplate>
      <TodoInsert addTodoHandler={ addTodoFire }  />
      <TodoList todoList={todoList} removeTodoHandler={removeTodoFire}  />
    </TodoTemplate>
  );
}

App.todoId = 4;

export default App;
