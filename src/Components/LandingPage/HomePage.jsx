import supabase from "/config/supabaseClient";

import Grid from "@mui/material/Grid"
import { useEffect, useState } from "react";

const MainContentStyles ={


  mainContent: {
    paddingTop: "100px",
    textAlign: "center",
   
    width: '100%', 
    height: '500px',

    },
    TagLine:{
     fontFamily: "Bookman, URW Bookman L, serif",
     
     
    }
    
}  

function HomePage() {
  
  return (
    <div>
         
         <Grid>
        
           <div>

            <h2 >Welcome to Thoughts</h2>
            <h3 className="TagLine" style={MainContentStyles.TagLine}>A Platform for Diverse Podcasts</h3>
       <p>Discover, listen, and share your favorite podcasts, and join a community of like-minded individuals who value meaningful conversations. 
        Stay informed, entertained, and inspired with Thoughts, your go-to platform for diverse and enriching podcast content.</p>
           
           
<p>Explore an array of voices, ideas, and perspectives from expert hosts and talented individuals who share their knowledge and experiences. 
  Whether you're seeking inspiration, seeking to expand your knowledge, or simply looking for entertaining content, Thoughts offers something for everyone.</p>
  </div>


 
  </Grid>
  

    </div>
  )
}

export default HomePage
