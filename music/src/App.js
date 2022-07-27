import './App.css';
import SearchInput from './components/Searchinput/search';

function App() {
  return (
    <div className="App m-20"> 
    <form>
    <input type="text" id="search" class="search" placeholder="Type song Name"></input>
    </form>
      <div className="title">
         <h2>SEARCH FOR<span> THE BEST</span> MUSIC</h2>
            <h5><span>Music doesn't lie. </span> If there is something to be changed in this world, then it can only happen through music.</h5>
      <SearchInput />
            </div>
    </div>

  );
}

export default App;
