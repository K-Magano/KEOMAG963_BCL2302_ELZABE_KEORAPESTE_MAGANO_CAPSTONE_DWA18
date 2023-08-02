import { useState, useEffect } from 'react'
import DisplayCard from '../DisplayCard';

const StringsArray=({ shows, image, showData, loading, titles, ascendingOrder, descendingOrder, handleShowMore })=>{


/*Adding more shows with teh show more Button*/
const [showCount, setShowCount] = useState(10);


 return (
    <div>
      <h3>Sorting A-Z & Z-A</h3>
      <button onClick={ascendingOrder}>Sort A-Z</button>
      &nbsp;&nbsp;&nbsp;&nbsp; {/* Spacing between the buttons */}
      <button onClick={descendingOrder}>Sort Z-A</button>
      <br />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {titles.slice(0, showCount).map((title, index) => (
            <div key={index}>
              <h3>{title}</h3>
              
              {showData && showData.image && ( // Add conditional check here
                <div>
                  <img src={showData.image} className="cardImage" />
                </div>
              )}
              
              <p>Seasons: {showData && showData.seasons}</p> {/* Add conditional check here */}
              <p>{showData && showData.description}</p> {/* Add conditional check here */}
              
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
 

export default StringsArray
