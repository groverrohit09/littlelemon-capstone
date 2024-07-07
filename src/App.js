import './App.css';
import BookingPage from './components/BookingPage';
import HomePage from './components/HomePage';
import Nav from './components/Nav';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <><BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/reservations' element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
