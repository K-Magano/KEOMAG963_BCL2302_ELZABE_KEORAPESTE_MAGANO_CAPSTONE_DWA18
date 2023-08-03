import { useState, useEffect, useRef } from "react";
import { Grid, Paper } from "@mui/material";
import PodcastFaves from "./PodcastFaves";
import LoadingState from "../Components/LoadingState"
import AudioPlayer from "../Components/AudioPlayer.jsx";


function DisplayCard({
  showData,
  loading,
  error,
  content,
  handleShowButtonClick,
  selectedShowId,
  isFavorite,
  favoriteList,
  handleToggleFavorite,
  likeIcon,
 
}) {


  const CardStyles = {
    ParentDiv: {
      background: "black",
      paddingLeft: "40px",
    },

    cardImage: {
      width: "100%",
      borderRadius: "9px",
      marginBottom: "9px",
    },

    cardTitle: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      fontSize: "25px",
      color: "#2A445E",
    },

    cardSeason: {
      top: "6px",
      left: "6px",
      backgroundColor: "white",
      padding: "5px 7px",
      color: "#2A445E",
    },

    Paper: {
      width: "350px",
      height: "100%",
      fontsize: "12px",
      flex: "0 0 auto",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      backgroundColor: "Green",
      padding: "15px",

      margin: "15px",
      ItemsAlign: "center",
    },

    PodcastCard: {
      width: "250px",
      height: "100%",
      fontsize: "12px",
      flex: "0 0 auto",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      border: "1px solid lightGrey",
      borderRadius: "5px",
      backgroundColor: "Transparent",
      padding: "15px",

      margin: "15px",
      ItemsAlign: "center",
    },

    Episodes: {
      width: "200%",
      height: "100%",
      fontsize: "12px",
      flex: "0 0 auto",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      backgroundColor: "blue",
      padding: "15px",

      margin: "15px",
      ItemsAlign: "center",
    },

    FetchButton: {
      color: "BLACK",
      backgroundColor: "#841e62",
      border: "none",
      cursor: "pointer",
      padding: "10px",
      borderRadius: "9px",
      marginTop: "10px",
      paddingBottom: "10px",
    },

    seasonButton:{
      color: "BLACK",
      backgroundColor: "#841e62",
      border: "none",
      cursor: "pointer",
      padding: "10px",
      borderRadius: "9px",
      marginTop: "10px",
  
      paddingBottom: "10px",
    },

    sButton:{
    display:"flex",
    flexDirection:"column",
    }
,
    CardUpdated: {
      color: "#2A445E",
      paddingBottom: "10px",
    },

    cardDescription: {
      color: "#2A445E",
    },

    Audio: {
      padding: "10px",
      borderRadius: "9px",
      background: " #b52d5b",
      display: "flex",
      flexDirection: "row",
    },
    currentProgress:{
     fontSize:"15px",
     color:"white"
    },
  };

 

  if (loading) return <h1>Loading...</h1>;

  if (error) {
    console.log(error);
    return <h2>Oops something went wrong while fetching data</h2>;
  }

 
/*
When the component renders for the first time, 
the progress object has no values for currentTime and duration*/ 

//State to track user progress

  const [progress, setProgress] = useState({
    currentTime: 0,
  duration: 0,
  progressPercentage: 0,
  }); 
  const [selectedSeason, setSelectedSeason] = useState(null);
  const audioRef = useRef(null)

  const handleSeasonButtonClick = (seasonTitle) => {
    // If the same season button is clicked again, deselect it
    setSelectedSeason((prevSelectedSeason) =>
      prevSelectedSeason === seasonTitle ? null : seasonTitle
    );
  };



  return (
    <div className="ParentDiv">
      <div className="genres-container">
        <h1>Shows</h1>
        <Grid container spacing={1}>
           
          {/* Display the list of shows */}
          {content.map((shows) => (
           <div key={showData.id} 
           className="PodcastCard" 
           style={CardStyles.PodcastCard}>
              <div>
                <img
                  src={shows.image}
                  className="cardImage"
                  style={CardStyles.cardImage}
                  alt={shows.title}
                />
              </div>
              <p className="cardTitle" style={CardStyles.cardTitle}>
                {shows.title}
              </p>
                {" "}
                Add to your Faves
                <img
                  src={
                    shows.isFavorite
                      ? "../public/icons/filledLike.svg"
                      : "../public/icons/like.svg"
                  }
                  width="24"
                  height="24"
                  className="Faves"
                  
                  onClick={() => handleToggleFavorite(shows)}
                />
              

              <div className="cardSeason" style={CardStyles.cardSeason}>
                Season: {shows.seasons}
              </div>
              <div className="CardUpdated" style={CardStyles.CardUpdated}>
                Updated:{" "}
                {new Date(showData.updated).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
              <button
                className="FetchButton"
                style={CardStyles.FetchButton}
                disabled={loading}
                onClick={() => handleShowButtonClick(shows.id)}
              >
                Fetch Show
              </button>

              {/* <PodcastFaves showData={showData}
  loading={loading}
  error={error}
  content={content}
  handleShowButtonClick={handleShowButtonClick}
  selectedShowId={selectedShowId}
  isFavorite={isFavorite}
  handleToggleFavorite={handleToggleFavorite} // Pass handleToggleFavorite
  likeIcon={likeIcon}
/> */}
 
              {loading && <LoadingState />}

              {selectedShowId === shows.id && showData && (
                <Paper elevation={3} className="Paper" style={CardStyles.Paper}>
                  {/* Display the fetched showData */}
                  <div>
                    <img
                      src={showData.image}
                      className="cardImage"
                      style={CardStyles.cardImage}
                      alt={showData.title}
                    />
                  </div>

                  <p className="cardTitle" style={CardStyles.cardTitle}>
                    {showData.title}
                  </p>

                    {showData?.seasons?.map((season) => (
                      <div key={season.season}>
                        <div className="sButton" style={CardStyles.sButton}>

                        <button onClick={() => handleSeasonButtonClick(season.title)}className="seasonButton" 
                        style={CardStyles.seasonButton} >{season.title}</button>
                        </div>

          {selectedSeason === season.title && (
                         <>
            
   {/* Fetching the all Episodes of the seasons */}
   {season.episodes && season.episodes.length > 0 ? (
                              season.episodes.map((episode) => (
                                <div key={episode.episode}>
                                  {/* Episode details */}
                                  {/* Check if the episode object is valid */}
                                  {episode.file && (
                                    <>


                                      <p
                                        className="EpisodeName"
                                        style={CardStyles.EpisodeName}
                                      >
                                        {episode.title}
                                      </p>

                                      <img
                className="cardImage"
                style={CardStyles.cardImage}
                src={season.image}
                alt={season.title}
              />
                                      <p
                                        className="EpisodeDescription"
                                        style={CardStyles.EpisodeDescription}
                                      >
                                        {episode.description}
                                      </p>
                                      {/* Display the number of episodes in the season */}
                                      <p>
                                        Number of Episodes: {season.episodes.length}
                                      </p>
                                      <p>Episode: {episode.episode}</p>

                                      {/* AUDIO FILE */}
                                     
                            <AudioPlayer
                                           showData={showData}
                                           file={episode.file}
                                           isFavorite={favoriteEpisodes.some((favEpisode) => favEpisode.id === episode.id)} // Check if the current episode is in favorites
                                           progress={progress}
                                           handleToggleFavorite={() => handleToggleFavorite(episode)}
                                        />  
                            
                            </>
                                )}
                              </div>
                            ))
                          ) : (
                            <p>No episodes found for this season.</p>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </Paper>
              )}
            </div>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default DisplayCard;

