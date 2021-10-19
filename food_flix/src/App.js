import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/TestFunctional';
import TestClass from './components/TestClass';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<TestClass test_prop={'test text'} />
			<FunctionalComponent test_num={10} test_string="tester" />
		</div>
	);
}

export default App;
