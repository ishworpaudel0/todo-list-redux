import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTodo } from '../store/slice/todoSlice';
import './form.css';

const Form = () => {
    const [todoEvent, setTodoEvent] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!todoEvent || !date) return alert("Please fill in the title and date");
        
        dispatch(addTodo({ todoEvent, description, date }));
        navigate('/viewList'); 
    };

    return (
        <div className='form-container'>
            <h2 className='form-title'>Add New Task</h2>
            <form className='form' onSubmit={handleSubmit}>
                <input placeholder='Event Title' value={todoEvent} onChange={(e) => setTodoEvent(e.target.value)} />
                <input placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
                <button type="submit" className="submit-btn">Add to List</button>
            </form>
        </div>
    );
};
export default Form;