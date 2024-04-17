import { useState } from 'react';

const AddRating = ({ handleAddRating }) => {
    const [rating, setRating] = useState('');

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };

    const handleAddRatingClick = () => {
        if (rating.trim().length > 0) {
            handleAddRating(parseInt(rating));
            setRating('');
        }
    };

    return (
        <div className='rating'>
            <input
                type='number'
                placeholder='Add rating (1-5)'
                value={rating}
                onChange={handleRatingChange}
            />
            <button onClick={handleAddRatingClick}>Add Rating</button>
        </div>
    );
};

export default AddRating;
