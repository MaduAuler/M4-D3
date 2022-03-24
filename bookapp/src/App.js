import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BookList from './components/BookList';
import MyBadge from './components/MyBadge';
import WarningSign from './components/WarningSign';
import book from './data/fantasy.json'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Registration from './components/Registration';
import NavBar from './components/NavBar';

function App() {
  
  return (
    
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path= "/" element={ <BookList booksArr = {book}/>}/>
    <Route path="/registration" element={<Registration/>}/>
    </Routes>
       </BrowserRouter>
  );
}

export default App;
