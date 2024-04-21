import React, { useState } from 'react';
import AddStory from './AddStory'; // Assuming AddStory component is in a separate file

const Add = () => {
  const [showAddStory, setShowAddStory] = useState(false);

  const handleAddStory = (storyText, storyTitle, storyGenre) => {
    
    console.log("Adding story:", storyText, "with title:", storyTitle, "with genre:", storyGenre);
    
  };

  const toggleAddStory = () => {
    setShowAddStory(!showAddStory);
  };

  return (
    <div>
      <button onClick={toggleAddStory}>+</button>
      {showAddStory && <AddStory handleAddStory={handleAddStory} />}
    </div>
  );
};

export default Add;
