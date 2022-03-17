import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BookList from './components/BookList';
import MyBadge from './components/MyBadge';
import SingleBook from './components/SingleBook';
import WarningSign from './components/WarningSign';
import book from './data/fantasy.json'

function App() {
  
  return (
    
    <div className="App">
    <WarningSign name="IM PROPS"/>
    <MyBadge text="Hello im badge props" color="green"/> 
    <BookList booksArr = {book}/>
       </div>
  );
}

export default App;
