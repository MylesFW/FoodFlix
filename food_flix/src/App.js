import 'bootstrap/dist/css/bootstrap.min.css';
import Navs from './components/Navs';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';
import HomeCarousel from './components/HomeCarousel';

function App() {
	return (
		<>
			<Navs />
<<<<<<< HEAD
			<HomeCarousel />
			console.log(jsonify(process.env.REACT_APP_FOODFLIX_API_KEY))
=======
>>>>>>> 0bfe0a0eca9ec4a0366d1ed77ec41ed1700a7b6c
			<Body />
			<Footer />
		</>
	);
}

export default App;
