import './App.css';
import { Banner } from './components/Banner';
import { MovieCreator } from './components/MovieCreator';


function App() {
  return (
    <div className="App">
      <Banner/>
      <div className="container">
        <MovieCreator/>
      </div>
    </div>
  );
}

export default App;
