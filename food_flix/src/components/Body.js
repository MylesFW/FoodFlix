import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Movie = props => {
    //Note the second argument is an empty array. We are only 
    //replaced null with empty arr
    const [movie, setMovie] = useState([]);
    console.log(movie)
    console.log(setMovie)

    useEffect(() => {
        axios
        .get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=00c8e5cb703823bba820eed2451dab07&page=1')
        .then((res) => {
          setMovie(res.data.results);
          console.log(res.data.results);
        })
            //  .then(response=>{setMovie(response.data)})
            //  })
        .catch((err => {
          console.log(err);
        }))
    }, []);

    return(
      <div>
        
      {movie.length > 0 && movie.map((movie, index)=>{
          return (<div key={index}>{movie.id}</div>)
      })}
      
  </div>
    )
}

export default Movie;
