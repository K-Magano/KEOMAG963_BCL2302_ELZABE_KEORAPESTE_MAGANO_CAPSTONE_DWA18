import React from "react";
import { useState, useEffect } from "react";
import { Drawer } from '@mui/material'


function PodcastFaves(
  showData,
  loading,
  error,
  content,
  handleShowButtonClick,
  selectedShowId,
  isFavorite,
  handleToggleFavorite,
  likeIcon,
  favoriteList
) {
  // State to store the user's favorite episodes
  const [favoriteEpisodes, setFavoriteEpisodes] = useState([]);

  // Function to add an episode to favorites
  const addToFavorites = (episode) => {
    setFavoriteEpisodes((prevFavorites) => [...prevFavorites, episode]);
  };

  // Function to remove an episode from favorites
  const removeFromFavorites = (episodeId) => {
    setFavoriteEpisodes((prevFavorites) =>
      prevFavorites.filter((episode) => episode.id !== episodeId)
    );
  };

  // Retrieve favorites from local storage on initial load
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      setFavoriteEpisodes(storedFavorites);
    }
  }, []);

  // Update local storage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteEpisodes));
  }, [favoriteEpisodes]);

 
  const drawerStyles ={

    drawer: {Width: "10px",
    backgroundColor:"pink"},
  
   

  } 

  return (
   
    <div>
       <Drawer
    className="drawer"
    variant="permanent"
    anchor="top"
    style={drawerStyles.drawer}
    >
      <h3>My Favorites</h3>
      <p>text</p>
      {/* Display favorite episodes */}
      {favoriteEpisodes.map((episode) => (
        <div key={episode.id}>
          <h2>{episode.show}</h2>
          <p>Season: {episode.season}</p>{" "}
          <p>Episode Title: {episode.title}</p>
          <button onClick={() => removeFromFavorites(episode.id)}>
            Remove from Favorites
          </button>
        </div>
      ))}
      </Drawer>
    </div>
   
  );
}

export default PodcastFaves;
