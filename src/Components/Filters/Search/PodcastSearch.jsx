import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function PodcastSearch() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const FetchShows = (value) => {
    fetch('https://podcast-api.netlify.app/shows')
      .then((response) => response.json())
      .then((json) => {
        const filteredResults = json.filter((show) => {
          return (
            value && // If input field is empty, don't render anything
            show &&
            show.title.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(filteredResults);
      });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setInput(value);
    FetchShows(value);
  };

  // Close the search overlay
  const handleCloseSearch = () => {
    // Implement the logic to close the search overlay
    // For example, you could set a state to control the visibility of the overlay
  };

  // Open the search overlay
  const handleOpenSearch = () => {
    // Implement the logic to open the search overlay
    // For example, you could set a state to control the visibility of the overlay
  };

  // Display search results using the displayTitles function
  function displayTitles(titles) {
    // Implement the logic to display the search results
    // For example, you could use the 'results' state to render the search results using the 'displayTitles' function
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            type="text"
            placeholder="What would you like to search?"
            inputProps={{ 'aria-label': 'search' }}
            value={input}
            onChange={handleChange}
          />
        </Search>
      </AppBar>
      {/* Render DisplayCard for each result */}
      {/* Call the displayTitles function here to display the search results */}
    </Box>
  );
}
