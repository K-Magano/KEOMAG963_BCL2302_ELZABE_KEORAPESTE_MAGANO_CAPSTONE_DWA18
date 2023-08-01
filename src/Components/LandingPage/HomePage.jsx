
import { Paper, Grid } from "@mui/material"
import LogInOutContainer from "../LogIns/LogInOutContainer.jsx";

const MainContentStyles ={


  mainContent: {
    paddingTop: "100px",
    textAlign: "center",
    backgroundImage: 'URL("https://cdn.gencraft.com/prod/user/67fd3653-f019-410b-807b-2ad6d7e010f2/82ecd89f-ea89-4423-8fbe-97c141386efe/images/image0_0_watermark.jpg?Expires=1690982550&Signature=EuAZCWB~WS76FhNKirVytAo-C3YEIwHPX8z3EjOb1H-EqE4HyHihDs7RaX5rfHEXt3Z1ojJSsrZ9gW60D0~RDh1xYxf94SFk2Y8hnlUCKWNjGXbp8MaPgtXBGq3uB-APlb4CswjupXsmX-qQYfTaEohmDACgXbompE7Z3w8rx46DZOBR5b7Mhidrnr7BXiiPsG0qbo1lELjqUfJtDAIMPfZMx8JM8eSNum5-O0DWuoTDWF1SAZLHiHqMqkCdUysN78YIbyWhs1iWeDuD4GLqQSDiaDHoK0VL71gXYwHGk9J3jBWEHZPKXLRn0gscnvrK-oZxhe~gjtQuYiEIG21Rew__&Key-Pair-Id=K3RDDB1TZ8BHT8") ',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',  
    width: '100%', 
    height: '500px',

   
    },
}  

function HomePage() {
  return (
    <div>
       <Paper className="mainContent" sx={MainContentStyles.mainContent}>
       <LogInOutContainer/>
         <Grid>
        
           <div>

            <h2 >Welcome to Thoughts</h2>
            <h3>"A Platform for Diverse Podcasts"</h3>
       <p>Discover, listen, and share your favorite podcasts, and join a community of like-minded individuals who value meaningful conversations. 
        Stay informed, entertained, and inspired with Thoughts, your go-to platform for diverse and enriching podcast content.</p>
           
           
<p>Explore an array of voices, ideas, and perspectives from expert hosts and talented individuals who share their knowledge and experiences. 
  Whether you're seeking inspiration, seeking to expand your knowledge, or simply looking for entertaining content, Thoughts offers something for everyone.</p>
  </div>

  </Grid>
  
            </Paper>
    </div>
  )
}

export default HomePage
