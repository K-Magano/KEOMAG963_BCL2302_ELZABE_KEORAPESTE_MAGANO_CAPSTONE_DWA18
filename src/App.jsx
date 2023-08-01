import { useState, useEffect } from "react";
import StringsArray from "./Components/Filters/StringsArray";
import DateFilter from "./Components/Filters/DateFilter";
import PodcastSearch from "./Components/Filters/Search/PodcastSearch";
import CarouselComponent from "./Components/CarouselComponent";
import DisplayCard from "./Components/DisplayCard";
import FetchApi from "./FetchApi";
import PodcastFaves from "./Components/PodcastFaves";
import PodcastGenreTab from "./PodcastGenreTab";
import HomePage from "./Components/LandingPage/HomePage";


function App() {
  // Lift state up from PodcastApp
  const [content, setContent] = useState([]);
  const [selectedShowId, setSelectedShowId] = useState(null);
  const [showData, setShowData] = useState({});
  const [episodes, setEpisodes] = useState([]);

  const [loading, setLoading] = useState(false);
  const [titles, setTitles] = useState([]);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState([])
  const [selectedGenre, setSelectedGenre] = useState(1);
  const [filteredGenres, setFilteredGenres] = useState(content);





 useEffect(() => {
  setLoading(true);
  fetch("https://podcast-api.netlify.app/shows")
    .then((response) => response.json())
    .then((data) => {
      const initialState = data.map((showData) => ({
        ...showData,
        isFavorite: false, // Add the isFavorite property to each showData object
      }));
      setContent(initialState);
      setLoading(false);
    })
    .catch((error) => {
      console.error(error);
      setLoading(false);
      setError("Oops something went wrong while fetching data");
    });
}, []);



function handleToggleFavorite(id) {
  setContent((prevContent) =>
    prevContent.map((showData) =>
      showData.id === id ? { ...showData, isFavorite: !showData.isFavorite } : showData
    )
  );
}
 
  useEffect(() => {
    setLoading(true), [];

    fetch("https://podcast-api.netlify.app/shows")
      .then((response) => response.json())
      .then((data) => {
        setShowData(data);
        setTitles(data.map((shows) => shows.title)), 
        setLoading(false);
      })

      .catch((error) => {
        console.error(error);
        setLoading(false);
        setError("Oops something went wrong while fetching data");
      });
  }, []);

  const fetchContent = () => {
    fetch("https://podcast-api.netlify.app/shows")
      .then((response) => response.json())
      .then((data) => setContent(data));
  };

  const fetchShow = (id) => {
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then((response) => response.json())
      .then((data) => setShowData(data));
  };

  const fetchEpisodes = (id) => {
    fetch(`https://podcast-api.netlify.app/id/${id}/episodes`)
      .then((response) => response.json())
      .then((data) => setEpisodes(data));
  };

  useEffect(() => {
    fetchContent();
  }, []);

  useEffect(() => {
    if (selectedShowId) {
      fetchShow(selectedShowId);
    }
  }, [selectedShowId]);

  const ascendingOrder = () => {
    setTitles(titles.slice().sort((a, b) => a.localeCompare(b)));
  };

  const descendingOrder = () => {
    setTitles(titles.slice().sort((a, b) => b.localeCompare(a)));
  };

  const handleShowButtonClick = (id) => {
    setSelectedShowId(id);
  };

  const handleShowMore = () => {
    setShowCount((prevCount) => prevCount + 20);
  };

  const handleSelectGenre = (genreValue) =>{
    setSelectedGenre(genreValue);
    const filteredShows = content.filter((show)=> 
    show.genres.includes(genreValue)
    );
    setFilteredGenres(filteredShows);
  }

  function getGenreName(genreID) {
    return genreID[genreId]
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

  return (
    <>
      
<HomePage/>

     
      {/* <h1>Final Thoughts</h1> <CarouselComponent />
      <PodcastFaves />

      <PodcastSearch />
      
      <PodcastGenreTab onSelectGenre={handleSelectGenre}/>
      
      
      Render PodcastApp <StringsArray
        shows={content}
        loading={loading}
        titles={titles}
        ascendingOrder={ascendingOrder}
        descendingOrder={descendingOrder}
        handleShowMore={handleShowMore}     />
        
       
      <DateFilter
        shows={content}
        loading={loading}
        titles={titles}
        ascendingOrder={ascendingOrder}
        descendingOrder={descendingOrder}
        handleShowMore={handleShowMore}
      /> */}
     
  


      {/* Render PodcastApp    <FetchApi
        content={content}
        selectedShowId={selectedShowId}
        showData={showData}
        episodes={episodes}
        fetchContent={fetchContent}
        fetchShow={fetchShow}
        fetchEpisodes={fetchEpisodes}
        handleShowButtonClick={handleShowButtonClick}
      />   <DisplayCard
        selectedShowId={selectedShowId}
        showData={showData}
        loading={loading}
        error={error}
        content={content}
        handleShowButtonClick={handleShowButtonClick}
        isFavorite={isFavorite}
        handleToggleFavorite={handleToggleFavorite}
        filteredGenres={filteredGenres}
       
        genreList={genreList}
       
      />*/}
  

    

      {/*
    
    
    
  */}

 
    </>
  );
}

export default App;
