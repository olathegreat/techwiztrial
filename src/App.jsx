import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './pages/Landingpage'
import SearchResult from './pages/SearchResult'


function App() {
  
  return (
       <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route path='/search-result' element={<SearchResult/>}/>
       </Routes>
  )
}

export default App
