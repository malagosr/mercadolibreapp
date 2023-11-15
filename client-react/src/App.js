import SearchBar from './SearchBar'
import { SearchProvider } from './SearchContext'
import Home from './Home'
import ItemList from './ItemsList'
import ItemDetail from './ItemDetail'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss';

function App() {
  return (
    <Router>
      <div className='App'>
        <SearchProvider>
          <SearchBar/>
          <div className='content'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/itemList" element={<ItemList />} />
              <Route path="/itemDetails/:id" element={<ItemDetail />} />
            </Routes> 
          </div>
        </SearchProvider>
      </div>
    </Router>
  );
}

export default App