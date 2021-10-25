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
			<HomeCarousel />
			console.log(jsonify(process.env.REACT_APP_FOODFLIX_API_KEY))
			<Body />
			<Footer />
		</>
	);
}

export default App;
