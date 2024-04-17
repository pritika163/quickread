import React, { useState } from 'react';
import { useEffect } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import StoryList from './Components/StoryList';
import { nanoid } from 'nanoid';
import Search from './Components/Search';
import Header from './Components/Header';
import AddStory from './Components/AddStory';
import { CiCirclePlus } from "react-icons/ci";
import AddRating from './Components/AddRating';

const Home =() => {
    const [story, setStory] = useState([
        {
            id: nanoid(),
            text: "This my first story",
            genre: "Mystery",
            date: "12/04/2023",
            rating: 4,
        },
        {
            id: nanoid(),
            text: "This my second story",
            genre: "Romantic",
            date: "14/04/2023",
            rating: 4,
        },
        {
            id: nanoid(),
            text: "This my third story",
            genre: "Comedy",
            date: "18/04/2023",
            rating: 4,
        },
    ]);

    const [searchText, setSearchText] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedStoryId, setSelectedStoryId] = useState('');
    const [darkMode, setDarkMode] = useState(false);
    const [showAddStory, setShowAddStory] = useState(false);

    useEffect(() => {
        const savedStory = JSON.parse(localStorage.getItem('quickread-data'));
        if(savedStory) {
            setStory(savedStory);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('quickread-data', JSON.stringify(story));
    }, [story]);

    const toggleAddStory = () => {
        setShowAddStory(!showAddStory);
    };

    const addStory = (text, gen) => {
        const date = new Date();
        const newStory = {
            id: nanoid(),
            text: text,
            genre: gen,
            date: date.toLocaleDateString()
        }
        const newStories = [...story, newStory];
        setStory(newStories);
    };

    const deleteStory = (id) => {
        const newStories = story.filter((story)=>story.id !== id);
        setStory(newStories);
    }

    const handleSelectStory = (id) => {
        setSelectedStoryId(id);
    };

    const handleAddRating = (id, rating) => {
        const updatedStory = story.map((item) => {
            if (item.id === id) {
                return { ...item, rating: rating };
            }
            return item;
        });
        setStory(updatedStory);
    };

    return (
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className='container'>
                <Header handleToggleDarkMode={setDarkMode}/>
                <div>
                    <Search handleSearchStory={setSearchText}/>
                    <select value={selectedGenre} className="selGenre" onChange={(e) => setSelectedGenre(e.target.value)}>
                        <option value="">All Genres</option>
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
                </div>
                <StoryList story={story.filter((story) => 
                    story.text.toLowerCase().includes(searchText.toLowerCase()) &&
                    (selectedGenre ? story.genre === selectedGenre : true)
                )}    
                    handleDeleteStory={deleteStory}
                    handleSelectStory={handleSelectStory}
                />
                {selectedStoryId && (
                    <AddRating
                        handleAddRating={(rating) => handleAddRating(selectedStoryId, rating)}
                    />
                )}
                <CiCirclePlus  className='plus-icon' onClick={toggleAddStory} size='2em'></CiCirclePlus>
                {showAddStory && <AddStory handleAddStory={addStory} />}
            </div> 
        </div>
    );
};

export default Home;
