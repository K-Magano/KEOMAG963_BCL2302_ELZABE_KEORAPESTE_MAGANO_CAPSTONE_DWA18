import { useState, useEffect } from 'react'


const DateFilter=()=>{

   const [shows, setShows] = useState([]);
   const [loading, setLoading] = useState(false);
   const [titles, setTitles] = useState([]);
  
   /*Adding more shows with teh show more Button*/
   const [showCount, setShowCount] = useState(10);
  

   useEffect(() => {
      setLoading(true),([]);
           
         fetch("https://podcast-api.netlify.app/shows")
         .then((response) => response.json())
         .then((data) => {
          setShows(data);
           setTitles(data);
              (data.map((shows) => ({
              
              ...shows, 
                updated: new Date(shows.updated).toLocaleDateString("en-US",
                {day: '2-digit', month: 'short', year: '2-digit'}
              )
              
              })));
            setLoading(false);
                              })

      .catch((error) =>{
         console.error(error);
          setLoading(false);
            });
      }, [])
    
const ascendingOrder=()=> 
{setTitles(titles.slice().sort((a,b)=> a.title.localeCompare(b.title)))
}

const descendingOrder=()=> 
{setTitles(titles.slice().sort((a,b)=> b.title.localeCompare(a.title))
   )
}

const handleShowMore=()=>{
   setShowCount((prevCount) => prevCount +20)
};

return (
   <div>
     <h3>Sorting Latest to oldest </h3>
     
     <button onClick={ascendingOrder}>Oldest</button>
     &nbsp;&nbsp;&nbsp;&nbsp; {/* Spacing between the buttons */}
     <button onClick={descendingOrder}>Newest</button>
     <br />
     {loading ? (
       <p>Loading...</p>
     ) : (
       <div>
         {titles.slice(0, showCount).map((shows, index) => (
           <div key={index} >
             <h3>{shows.title}</h3>
             {/* Add any other information related to each podcast here */}
             <p>Season: {shows.seasons}</p>
             <p>Updated: {shows.updated}</p>
           </div>
         ))}
       </div>
     )}
     {showCount < titles.length && (
       <button onClick={handleShowMore}>Show more</button>
     )}
   </div>
 );
};
 

export default DateFilter
