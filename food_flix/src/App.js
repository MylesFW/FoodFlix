import 'bootstrap/dist/css/bootstrap.min.css';
import Navs from './components/Navs';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';

function App() {
	return (
		<>
			<Navs />
			console.log(process.env.REACT_APP_FOODFLIX_API_KEY)
			<Body />
			<Footer />
		</>
	);
}

export default App;


