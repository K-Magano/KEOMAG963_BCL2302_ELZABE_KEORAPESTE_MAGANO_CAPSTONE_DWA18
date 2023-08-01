

function SearchResults ({results}){
    return (
  
     <div className='Paper'>
        { results.map((result, id) =>{
          return <div key={id}>{result.title}</div>
        })}
             
      </div>
    )
  }
  
  export default SearchResults