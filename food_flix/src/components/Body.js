import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col,Container,Row } from 'react-bootstrap';

const Movie = (props) => {
	//Note the second argument is an empty array. We are only
	//replaced null with empty arr
	const [movie, setMovie] = useState([]);
	console.log(movie);
	console.log(setMovie);

	useEffect(() => {
		axios
			.get(
        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key='+
				process.env.REACT_APP_FOODFLIX_API_KEY+'&page=1'
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

  if (movie === null) {
    return <img src ="https://cdn.dribbble.com/users/576558/screenshots/3801681/media/f2148dc5132ea854540a3c693bc51d5d.png?compress=1&resize=800x600"></img>
  }

	return (
		<>
			
      <Container>
    <h1>Movie Title</h1>
    <Row>
		
  
      <Col>	{movie.length > 0 &&
				movie.map((movie, index) => {
					return <div key={index}>{movie.title}</div>;
				})} </Col>
      
    </Row>
    <Row>
      <Col>1 of 3</Col>
      <Col>2 of 3</Col>
      <Col>3 of 3</Col>
    </Row>
  </Container>

		</>
	);
};

export default Movie;
