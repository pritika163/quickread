import React from 'react';
import StoryW from './StoryW';
const StoryList =({ story, handleDeleteStory, handleRating }) => {
    return (
        <div className='story-list'>
            {story.map((story)=>(   
            <StoryW 
                id={story.id} 
                title={story.title}
                text={story.text} 
                genre={story.genre} 
                date={story.date}
                handleDeleteStory = {handleDeleteStory}
                handleRating = {handleRating}/>
            ))}
            
        </div>
    );
};
export default StoryList;