import React, { useState } from 'react';
import AddStory from './AddStory'; // Assuming AddStory component is in a separate file

const Add = () => {
  const [showAddStory, setShowAddStory] = useState(false);

  const handleAddStory = (storyText, storyGenre) => {
    // Handle adding the story logic here
    console.log("Adding story:", storyText, "with genre:", storyGenre);
    // You can add the actual logic to add the story to your data
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
