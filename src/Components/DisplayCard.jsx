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
  likeIcon, 
  genreList,
  filteredGenres


}   )

{ const [selectedSeason, setSelectedSeason] = useState(null);

    const handleSeasonButtonClick = (seasonTitle)  => {
    setSelectedSeason((prevSelectedSeason) =>
    prevSelectedSeason === seasonTitle ? null : seasonTitle
    );
  };



  const CardStyles = {
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
      borderRadius: "2px",
      fontWeight: "bold",
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
      backgroundColor: "Transparent",
      padding: "15px",
    },

    CardButton: {
      color: "white",
      backgroundColor: "#841e62",
      border: "none",
      cursor: "pointer",
      padding: "10px",
      borderRadius: "9px",
      marginLeft: "25%",
      marginTop: "10px",
      paddingBottom: "10px",
    },

    descriptionButton: {
      color: "white",
      backgroundColor: "#841e62",
      border: "none",
      cursor: "pointer",
      padding: "10px",
      borderRadius: "9px",
      marginLeft: "25%",
    },

    CardUpdated: {
      color: "#2A445E",
    },

    cardDescription: {
      color: "#2A445E",
    },
  };

  if (loading) return <h1>Loading...</h1>;

  if (error) {
    console.log(error);
    return <h2>Oops something went wrong while fetching data</h2>;
  }



  return (
    
    <div className="Parent Dive">
      <div className="genres-container">
        <h1>Shows</h1>
        <Grid container spacing={2}>
          {/* Display the selected show's data */}
          {showData && !loading && !error && showData.seasons && (
            <Paper elevation={3} className="Paper" key={showData.id} style={CardStyles.Paper}>
              <div>
                <img src={showData.image} className="cardImage" style={CardStyles.cardImage} alt={showData.title} />
              </div>
  
              <p className="cardTitle" style={CardStyles.cardTitle}>
                {showData.title}
              </p>
              <div className="cardSeason" style={CardStyles.cardSeason}>
                Season:{" "}
                {showData.seasons.map((season) => season.title).join(", ")}
              </div>
  
              <div className="cardGenre" style={CardStyles.cardGenre}>
                Genre: {showData && showData.genres && showData.genres.map((genreId) => genreList[genreId]).join(", ")}
              </div>
  
              <div className="CardUpdated" style={CardStyles.CardUpdated}>
                Last Update: {showData.updated}
              </div>
            </Paper>
          )}
  
          {/* Display the list of shows */}
          {filteredGenres.map((shows) => (
            <Paper elevation={3} className="Paper" key={shows.id} style={CardStyles.Paper}>
              <div>
                <img src={shows.image} className="cardImage" style={CardStyles.cardImage} alt={shows.title} />
              </div>
              <p className="cardTitle" style={CardStyles.cardTitle}>
                {shows.title}
              </p>
  
              <img
                src={shows.isFavorite ? "../public/icons/filledLike.svg" : "../public/icons/like.svg"}
                width="24"
                height="24"
                className="Faves"
                onClick={() => handleToggleFavorite(shows.id)}
              />
  
              {/* <Tooltip variant="plain">
                <button variant="plain" onClick={handleButtonClick}>
                  {isClicked ? "Delete from Favorites" : "Add to Favorites"}
                </button>
              </Tooltip> */}
  
              <div className="cardSeason" style={CardStyles.cardSeason}>
                Season: {shows.seasons}
              </div>
  
              <div className="cardGenre" style={CardStyles.cardGenre}>
                Genre: {shows.genres && shows.genres.map((genreId) => genreList[genreId]).join(", ")}
              </div>
  
              <button className="FetchButton" onClick={() => handleShowButtonClick(shows.id)}>
                Fetch Show
              </button>
  
              {/* Display the seasons and episodes when the show is selected */}
              {selectedShowId === shows.id && showData.seasons && (
                < >
                  {/* Display the fetched showData */}
                  <div>
                    <img src={showData.image} className="cardImage" style={CardStyles.cardImage} alt={showData.title} />
                  </div>
  







  
                  <div className="seasons-container">
                    {showData.seasons.map((season) => (
                      <button
                        key={season.title}
                        className={
                          selectedSeason === season.title ? "selected-season-button" : "selected-button"
                        }
                        onClick={() => handleSeasonButtonClick(season.episodes)}
                      >
                        <p> Season: {season.season}</p>
                      </button>
                    ))}
                  </div>
  
                  {/* Display episodes for the selected season */}
                  {selectedSeason && showData.seasons && (
                    <div>
                      {showData.seasons.map((season) => (
                        season.title === selectedSeason && (
                          <div key={season.season}>
                            {season.episode && season.episodes.map((episode) => (
                              <div key={episode.episode}>
                                <p className="EpisodeName" style={CardStyles.EpisodeName}>
                                  {episode.title}
                                </p>
                                <p className="EpisodeDescription" style={CardStyles.EpisodeDescription}>
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
                        )
                      ))}
                    </div>
                  )}
                </>
              )}
            </Paper>
          ))}
        </Grid>
      </div>
    </div>
  )}
  

export default DisplayCard;