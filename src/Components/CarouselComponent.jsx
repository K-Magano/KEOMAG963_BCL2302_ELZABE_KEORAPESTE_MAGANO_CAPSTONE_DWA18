import {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const CarouselComponent =()=>{

  const [content, setContent] = useState([]);

  const fetchContent = () => {
    fetch('https://podcast-api.netlify.app/shows')
      .then((response) => response.json())
      .then((data) => setContent(data));
  };

  
  useEffect(() => {
    fetchContent();
  }, []);


 
  const responsive = {
     
    desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          itemClass: 'carousel-item-desktop'
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          itemClass: 'carousel-item-tablet',
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          itemClass: 'carousel-item-mobile'
        }
      };
    

  const PreviewCardStyles ={
  

  cardsList : {
      display: 'flex',
      flexWrap: 'nowrap',
      gap: '20px',
      overflowX: 'auto',
  },
  
  Paper: {
    fontSize: "18px",
    width:'250px',
     margin: "auto 1rem",
    AlignItem: "center",
    textAlign: "center",
    fontFamily: "arial",
    borderRadius: "1rem",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4)",
    paddingBottom: "0em",
    backgroundColor:"Transparent",
    justifyContent: 'spaceBetween',
    padding: '0.5em',
  },
  
  cardImage: {
      width: '90%',
      height: '80%',
      borderRadius: '9px',
      marginBottom: '9px',
      marginLeft: '9px',
  },
  

  cardTitle: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontSize: '20px',
  },
  
  cardStats: {
      display: 'flex',
      alignItems: 'center'
  },
  
  cardStar: {
      height: '14px',
  },
  
  
  cardPrice: {
      marginTop: 'auto'
  },
  
  cardSeason : {
      position: 'absolute',
      top: '6px',
      left: '6px',
      backgroundColor: 'white',
      padding: '5px 7px',
      borderRadius: '2px',
      fontWeight: 'bold',
  },

  Carousel:{
  backgroundColor: 'blue',
  }
  
}


    return (
      <> 
      <Carousel responsive={responsive} className='Carousel'>
        {content.map((content) =>(

<Paper key={content.id} className="Paper" style={PreviewCardStyles.Paper}>

<div className="card" style={PreviewCardStyles.card}>

<div>
  <img src={content.image} className="cardImage" style={PreviewCardStyles.cardImage} />
  <p className="cardTitle" style={PreviewCardStyles.cardTitle}>{content.title}</p>
  <div className="cardSeason">Season: {content.seasons}</div>
</div>

</div>

</Paper>

        ))}
      
            </Carousel>
    </>
  );
}


export default CarouselComponent;