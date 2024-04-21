import { useState } from 'react';

const AddStory = ({ handleAddStory }) => {
    const [storyText, setStoryText] = useState('');
    const [storyTitle, setStoryTitle] = useState('');
    const [selectedGenres, setSelectedGenres] = useState('');
    const charLim = 5000;
    const charLimt = 100;

    const handleChange = (event) => {
        if (charLim - event.target.value.length >= 0)
            setStoryText(event.target.value);
    };
    const handleTitleChange = (event) => {
        if (charLimt - event.target.value.length >= 0)
            setStoryTitle(event.target.value);
    };


    const handleSaveClick = () => {
        if (storyText.trim().length > 0) {
            handleAddStory(storyText, storyTitle, selectedGenres);
            setStoryText('');
            setStoryTitle('');
            setSelectedGenres('');
        }
    };

    const handleGenreChange = (event) => {
        setSelectedGenres(event.target.value);
    };

    return (
        <div className='story new'>
            <textarea
                rows='3'
                cols='10'
                placeholder='Type title....'
                value={storyTitle}
                onChange={handleTitleChange}
            ></textarea>
            <textarea
                rows='8'
                cols='10'
                placeholder='Type new story....'
                value={storyText}
                onChange={handleChange}
            ></textarea>
            <select value={selectedGenres} onChange={handleGenreChange}>
                <option value="">Select genre</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Mystery">Mystery</option>
                <option value="Romance">Romance</option>
                <option value="Thriller">Thriller</option>
                <option value="Horror">Horror</option>
                <option value="Adventure">Adventure</option>
                <option value="Historical">Historical</option>
                <option value="Drama">Drama</option>
                <option value="Comedy">Comedy</option>
            </select>
            <div className="story_footer">
                <small>{charLim - storyText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};

export default AddStory;
