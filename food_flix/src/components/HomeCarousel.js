import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel
			activeIndex={index}
			onSelect={handleSelect}
			style={{
				maxHeight: '50vh',
				overflow: 'hidden',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="http://onesheetdesign.com/wp-content/uploads/movie_poster_design.jpg"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlBgY9qydZlhhjj6D6pYE8OfW4v8KzA6uSA&usqp=CAU"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIByc_1VEyEHzRc85LTD3MdGK4YtANvKWBLQ&usqp=CAU"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default HomeCarousel;
