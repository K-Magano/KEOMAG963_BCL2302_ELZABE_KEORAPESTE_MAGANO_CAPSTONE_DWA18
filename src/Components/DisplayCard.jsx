import { useState, useEffect } from "react";
import { Grid, Paper } from "@mui/material";
import { Tooltip, Button } from "@mui/material";
import PodcastFaves from "./PodcastFaves";

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
      width: "250px",
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

  return (
    <div className="ParentDiv">
      <div className="genres-container">
        <h1>Shows</h1>
        <Grid container spacing={1}>
           
          {/* Display the list of shows */}
          {content.map((shows) => (
           <div key={showData.id} className="PodcastCard" style={CardStyles.PodcastCard}>
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

              <PodcastFaves
                favoriteList={favoriteList}
                isFavorite={isFavorite}
              />

              <button>
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
                  onClick={() => addToFavorites(episode)}
                  onClick={() => handleToggleFavorite(shows.id)}
                />
              </button>

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
                onClick={() => handleShowButtonClick(shows.id)}
              >
                Fetch Show
              </button>

             

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
                        <button onClick={() => handleSeasonButtonClick(season.title)}>{season.title}</button>


                        {selectedSeason === season.title && (
            <>
              <img
                className="cardImage"
                style={CardStyles.cardImage}
                src={season.image}
              />

              {/* Fetching the all Episodes of the seasons */}
              {season.episodes &&
                season.episodes.map((episode) => (
                  <div key={episode.episode}>
                    {/* Episode details */}
                    <p className="EpisodeName" style={CardStyles.EpisodeName}>
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
                    <div className="Audio" style={CardStyles.Audio}>
                      <img
                        src={
                          shows.isFavorite
                            ? "../public/icons/filledLike.svg"
                            : "../public/icons/like.svg"
                        }
                        width="24"
                        height="24"
                        className="Faves"
                        onClick={() => handleToggleFavorite(shows.id)}
                      />
                      <audio controls>
                        <source src={episode.file} type="audio/mpeg" />
                      </audio>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      ))}
    </div>
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
