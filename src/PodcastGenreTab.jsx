import {useState, useEffect} from 'react'
import { Tabs, Tab, Box } from '@mui/material/';

function PodcastGenreTab({ onSelectGenre }) {
    const [value, setValue] = useState(1);
    const [shows, setShows] = useState([]);
   
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
      onSelectGenre(newValue)
    };
  
  
    const LayoutStyles ={
    
  
      body : {
          
          display: 'flex',
          flexWrap: 'nowrap',
          gap: '20px',
          overflowX: 'auto',
          backgroundColor:"black",
      },
  
      tabText : {
      color: 'white',
    }
  
    }
  
    const genreList = {
      1: 'Personal Growth',
      2: 'True Crime and Investigative Journalism',
      3: 'History',
      4: 'Comedy',
      5: 'Entertainment',
      6: 'Business',
      7: 'Fiction',
      8: 'News',
      9: 'Kids and Family',
    
    };
  
   useEffect (() => { 
      fetch('https://podcast-api.netlify.app/shows')
      .then((response) => response.json())
      .then((data) => { 
        setShows(data);
     
        const updatedShows = data.map((shows)=> {
          const updatedGenres = shows.genres.map((genreId)=> genreList[genreId])
          return {
            ...shows,
            genres: updatedGenres,
          }
        })

        setShows(updatedShows)
      })
      .catch((error) => {
        console.error(error);
      });  
      
      }, []);
  
    return (
      <>
      <Box item xs={6} md={8} className='body' style={LayoutStyles.body} >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {Object.entries(genreList).map(([genreNumber, genreName]) => (
            <Tab
             key={genreNumber} 
             value={parseInt(genreNumber)} //Convert genreNumber to integer
             label={genreName}  
             className='tabText' 
             style={LayoutStyles.tabText}/>
          ))}
      </Tabs> 
          
        
      </Box>
  
                    
       </>
    );


}

export default PodcastGenreTab
