import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { getSongs } from './apiCalls';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [allSongs, setAllSongs] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState('');
  const [error, setError] = useState('');

  const getAllSongs = () => {
    getSongs()
      .then(data => setAllSongs(data))
  }

  useEffect(() => {
    getAllSongs()
  }, []);

  return (
    <div className='App'>
      <Header />
      <Routes>
      <Route path='/' element={<Home allSongs={allSongs} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
