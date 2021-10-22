import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Movie = (props) => {
	//Note the second argument is an empty array. We are only
	//replaced null with empty arr
	const [movie, setMovie] = useState([]);
	console.log(movie);
	console.log(setMovie);

	useEffect(() => {
		axios
			.get(
				'https://api.themoviedb.org/3/search/movie?api_key=00c8e5cb703823bba820eed2451dab07&query=Jack+Reacher'
			)
			.then((res) => {
				setMovie(res.data.results);
				console.log(res);
			})
			//  .then(response=>{setMovie(response.data)})
			//  })
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<h1>movie title</h1>
			{movie.length > 0 &&
				movie.map((movie, index) => {
					return <div key={index}>{movie.title}</div>;
				})}
			<h1>movie details</h1>
		</div>
	);
};

export default Movie;
