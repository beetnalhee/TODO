import './TodoTemplate.css';

// 일정 관리 컨테이너 컴포넌트
const TodoTemplate = function ({ children }) {

    return (
        <div className='TodoTemplate'>
            <div className="app-title">Things to do</div>
            <div className="content">{children}</div>
        </div>
    );
}

export default TodoTemplate;