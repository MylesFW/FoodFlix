import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col,Container,Row,Card,Button } from 'react-bootstrap';

const Movie = (props) => {
	//Note the second argument is an empty array. We are only
	//replaced null with empty arr
	const [movie, setMovie] = useState([]);
	console.log(movie);
  const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=';
  //const IMG_PATH = 'https//image.tmdb.org/t/p/w1280-';


	useEffect(() => {
		axios
			.get(
        API_URL +
				process.env.REACT_APP_FOODFLIX_API_KEY
			)
			.then((res) => {
				setMovie(res.data.results);
			})
			//  .then(response=>{setMovie(response.data)})
			//  })
			.catch((err) => {
				console.log(err);
			});
	},[]);

  if (movie === null) {
    return <img alt="movie" src ="https://cdn.dribbble.com/users/576558/screenshots/3801681/media/f2148dc5132ea854540a3c693bc51d5d.png?compress=1&resize=800x600" />
  }
  
	return (
    <>
    <Container>
    <h1>Movie Title</h1>	
		<Row>
			<Col> 
				<Card style={{ width: '18rem' }}>
				{movie.map((titles) => {
					return
					<div>
          <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
								<Card.Title key="movie">{titles.title}</Card.Title>
								<Card.Text> {titles.overview}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
								</Card.Body>
								</div>
							})}
            
        </Card>
      </Col>
    </Row>     
    </Container>
		</>
	);
};

export default Movie;
