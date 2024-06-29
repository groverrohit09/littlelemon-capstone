import './App.css';
import BookingPage from './BookingPage';
import HomePage from './HomePage';
import Nav from './Nav';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/reservations' element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;
