import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { getSongs } from './apiCalls';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [songData, setSongData] = useState({});
  const [selectedQuiz, setSelectedQuiz] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const getSongData = () => {
    getSongs()
      .then(data => {
        setSongData(data);
        setIsLoading(false);
      })
  }

  useEffect(() => {
    getSongData()
  }, []);

  return (
    <div className='App'>
      { isLoading &&
        <p>Loading... please wait!</p>
      }
      { !isLoading &&
        <>
          <Header />
          <Routes>
          <Route path='/' element={<Home songData={songData} />} />
          </Routes>
          <Footer />
        </>
      }
    </div>
  );
}

export default App;
