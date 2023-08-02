import { useState, useEffect } from "react";
import { Grid, Paper } from "@mui/material";
import { Tooltip,  Button } from '@mui/material';

function DisplayCard({
  showData,
  loading,
  error,
  content,
  handleShowButtonClick,
  selectedShowId,
  isFavorite,
  handleToggleFavorite,
  likeIcon

})

     
   


{
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
      width: "250px",
      height: "100%",
      fontsize: "12px",
      flex: "0 0 auto",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      backgroundColor: "green",
      padding: "15px",
      
      margin:"15px",
      ItemsAlign: "center",
    },


    Paper2: {
      width: "200%",
      height: "100%",
      fontsize: "12px",
      flex: "0 0 auto",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      backgroundColor: "blue",
      padding: "15px",
      
      margin:"15px",
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
      
      margin:"15px",
      ItemsAlign: "center",
    },


    CardButton: {
      color: "BLACK",
      backgroundColor: "#841e62",
      border: "none",
      cursor: "pointer",
      padding: "10px",
      borderRadius: "9px",
      marginTop: "10px",
      paddingBottom: "10px",
    },

    CardUpdated: {
      color: "#2A445E",
    },

    cardDescription: {

      color: "#2A445E",
      
    },

    Audio:{
      padding : "10px",
      borderRadius: '9px',
      background:" #b52d5b",
      display: "flex",
      flexDirection: 'row',
    }
  };

  if (loading) return <h1>Loading...</h1>;

  if (error) {
    console.log(error);
    return <h2>Oops something went wrong while fetching data</h2>;
  }

  const [progress, setProgress] = useState({}); // State to track user progress
  const [selectedSeason, setSelectedSeason] = useState(null);

  const handleSeasonButtonClick = (seasonTitle) => {
    // If the same season button is clicked again, deselect it
    setSelectedSeason((prevSelectedSeason) =>
      prevSelectedSeason === seasonTitle ? null : seasonTitle
    );
  };

  return(   
    
    <div className="Parent Dive">
  <div className="genres-container">
    <h1>Shows</h1>
    <Grid container spacing={1}>
      {/* Display the selected show's data */}
      {showData && !loading && !error && showData.seasons && (
        <Paper
          elevation={3}
          className="Paper"
          key={showData.id}
          style={CardStyles.Paper}
        >
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
          <div className="cardSeason" style={CardStyles.cardSeason}>
            Season:{" "}
            {showData.seasons.map((season) => season.title).join(", ")}
          </div>
          
          <div className="CardUpdated" style={CardStyles.CardUpdated}>
          Updated: {new Date(showData.updated).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
          </div>
        </Paper>
      )}

      {/* Display the list of shows */}
      {content.map((shows) => (
        <Paper
          elevation={3}
          className="Paper"
          key={shows.id}
          style={CardStyles.Paper}
        >
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
       
      
          <img src={shows.isFavorite
          ? "../public/icons/filledLike.svg"
          : "../public/icons/like.svg"}
          
          width="24" height="24" 
            className="Faves"
            onClick={() => handleToggleFavorite(shows.id)}
          />
          
{/* <Tooltip  variant="plain">
    <button variant="plain" onClick={handleButtonClick}>
      {isClicked ? "Delete from Favorites" : "Add to Favorites"}
    </button>
      </Tooltip>*/}

          <div className="cardSeason" style={CardStyles.cardSeason}>
            Season: {shows.seasons}
          </div>
          <button
            className="FetchButton"
            onClick={() => handleShowButtonClick(shows.id)}
          >
            Fetch Show
          </button>

          <button>Seasons</button>

          {selectedShowId === shows.id && showData.seasons && (
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
              <div className="cardSeason" style={CardStyles.cardSeason}>
                {showData.seasons.map((season) => (
                  <div key={season.season}>
                    <p>{season.title}</p>
                    <img
                      className="cardImage"
                      style={CardStyles.cardImage}
                      src={season.image}
                    />

                    {/* Fetching the all Episodes of the seasons */}
                    {season.episodes &&
                      season.episodes.map((episode) => (
                        <div key={episode.episode}>
                          <p
                            className="EpisodeName"
                            style={CardStyles.EpisodeName}
                          >
                            {episode.title}
                          </p>
                          <p
                            className="EpisodeDescription"
                            style={CardStyles.EpisodeDescription}
                          >
                            {episode.description}
                          </p>
                          <p>Episode: {episode.episode}</p>

                          {/* AUDIO FILE */}
                          
                          <div className="Audio"  style={CardStyles.Audio}>
                          <img src={shows.isFavorite
          ? "../public/icons/filledLike.svg"
          : "../public/icons/like.svg"}
          
          width="24" height="24" 
            className="Faves"
            onClick={() => handleToggleFavorite(shows.id)}
          />
                             <audio controls >
                            <source src={episode.file} type="audio/mpeg" />
                          </audio></div>
                         
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </Paper>
          )}

          {showData &&
            shows.id === selectedShowId &&
            showData.seasons &&
            showData.seasons.map((season) => (
              <div key={season.season}>
                <p>{season.title}</p>
                <img
                  className="cardImage"
                  style={CardStyles.cardImage}
                  src={season.image}
                />

                {/* Fetching the all Episodes of the seasons */}
                {season.episodes &&
                  season.episodes.map((episode) => (
                    <div key={episode.episode}>
                      <p
                        className="EpisodeName"
                        style={CardStyles.EpisodeName}
                      >
                        {episode.title}
                      </p>
                      <p
                        className="EpisodeDescription"
                        style={CardStyles.EpisodeDescription}
                      >
                        {episode.description}
                      </p>
                      <p>{episode.episode}</p>

                      {/* AUDIO FILE */}
                      <audio controls>
                        <source src={episode.file} type="audio/mpeg" />
                      </audio>
                    </div>
                  ))}
              </div>
            ))}
        </Paper>
      ))}
    </Grid>
  </div>
</div>
);
}
export default DisplayCard;

