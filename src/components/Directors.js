import React from "react";
import { directors } from "../data";

function Directors() {
  const listDirectors = directors.map((director) =>{
    return(
      <div key={director.name}>
        {director.name}
        <ul>
          {director.movies.map(movie => <li key={movie}>{movie}</li>)}
        </ul>
      </div>
    )
  })
  return(
    <div>{/*{code here}*/}
      <h1>Directors Page</h1>
      {listDirectors}
    </div>
  ) 
}

export default Directors;
