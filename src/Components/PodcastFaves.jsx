import React from "react";
import { useState, useEffect } from "react";

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import PreviewPodcast from "./testingcomps/PreviewPodcast";

function PodcastFaves({
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
}) {
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

  
const drawerWidth = 300;




const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
   
    <div>
      
     
<Box sx={{ display: 'flex' }}>
    
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="end"
      onClick={handleDrawerOpen}
      sx={{ ...(open && { display: 'none' }) }}
    > 
      <MenuIcon />
      <Typography> <h3>My Favorites</h3></Typography>
    </IconButton>
    
    
    <Drawer
    sx={{
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
    },
    }}
    variant="persistent"
    anchor="right"
    open={open}
    >
    <DrawerHeader>
    <IconButton onClick={handleDrawerClose}>
      {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </IconButton>
    </DrawerHeader>
    
    <Divider />
    < PreviewPodcast/>
       {/* Display favorite episodes */}
       {favoriteEpisodes.map((episode) => (
            <div key={episode.id}>
              <h2>{episode.show}</h2>
              <p>Season: {episode.season}</p>{" "}
              <p>Episode Title: {episode.title}</p>
          
            </div>
    
    
          ))}
    </Drawer>
    </Box>
    
   
    
    </div>
   
  );
}

export default PodcastFaves;

