import { useState } from 'react';
import './ReviewForm.css'

function ReviewForm() {
    const [values, setValues] = useState({
        title: '',
        rating: 0,
        content: '',
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((preValues) => ({
            ...preValues,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            title,
            rating,
            content,
        })
    }

    return (
        <form className="ReviewForm">
            <input type="text" name="title" value={values.title} onChange={handleChange}/>
            <input type="number" name="rating" value={values.rating} onChange={handleChange}/>
            <textarea name="content" value={values.content} onChange={handleChange}/>
        </form>
    );
}

export default ReviewForm;