import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md';
import './TodoItem.css';
import { useState } from 'react';
import React from 'react';

// 각 Todo 항목에 대한 정보를 보여주는 컴포넌트
const TodoItem = function ({ todo, removeEvent }) {

    const { num, todoText, complete } = todo;
    console.log(num, todoText, complete);
    
    const removeTodo = function (e) {
        removeEvent(num);
    }

    const [check, setCheckBox] = useState(false);

    const checkBox = function(event){
        setCheckBox(!check);
    }

    const test = function(){
        if(check===true){
            return "checkbox checked";
        } else{
            return "checkbox";
        }
    }


    return (
        <div className='TodoItem'>
            <div className={test()} onClick={checkBox}>
                {check ? <MdCheckBox/> : <MdCheckBoxOutlineBlank  /> }
                 <div className='text' >{todoText}</div>
            </div>
            <div className='remove' onClick={removeTodo}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
}

export default React.memo(TodoItem);