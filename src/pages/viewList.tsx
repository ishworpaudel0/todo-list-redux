import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../store/slice/todoSlice';
import type { RootState } from '../store/store';
import './viewList.css';

const ViewList = () => {
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    return (
        <div className='view-container'>
            <h2 className='view-heading'>Your Tasks</h2>
            <div className='view-list'>
                {todos.map((item, index) => (
                    <div key={index} className='view-item'>
                        <div className="item-info">
                            <h3>{item.todoEvent}</h3>
                            <p>{item.description}</p>
                            <small>{item.date}</small>
                        </div>
                        <button onClick={() => dispatch(deleteTodo(index))} className="delete-btn">Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ViewList;