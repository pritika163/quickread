import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
function StoryW({id, text, genre, date, rating, handleDeleteStory}) {
  return (
    <div className="story">
        <span>{text}</span>
        <div className="story_footer">
          <small>{date}</small>
            <small>{genre}</small>
            <small>{rating}</small>
            <MdDeleteForever className='delete-icon' onClick={() => handleDeleteStory(id)} size='1.3em'/>
            
        </div>
    </div>
  );
};

export default StoryW;