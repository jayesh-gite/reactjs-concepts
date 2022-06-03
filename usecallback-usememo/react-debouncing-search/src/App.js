import './App.css';
import Search1 from './components/Search1';
import Search2 from './components/Search2';
import Search3 from './components/Search3';
import BasicDebouceSearch from './components/BasicDebouceSearch';
function App() {
  return (
    <div className="App">
      <h2>Types of Debouncing Implementaion using React</h2>
      <BasicDebouceSearch />
      <Search1 />
      <Search2 />
      <Search3 />
    </div>
  );
}

export default App;
