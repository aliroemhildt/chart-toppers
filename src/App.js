import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getSongs } from './apiCalls';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Quiz from './Components/Quiz/Quiz';
import Footer from './Components/Footer/Footer';
import Error from './Components/Error/Error';
import './App.scss';

const App = () => {
  const [songData, setSongData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const getSongData = () => {
    getSongs()
      .then(data => {
        setSongData(data);
        setIsLoading(false);
      })
      .catch(error => setError(error))
  }

  useEffect(() => {
    getSongData()
  }, []);

  return (
    <div className='app'>
      <Header />
      { (isLoading && !error) &&
        <div className='loading-container'>
          <p className='loading-message'>Loading... please wait!</p>
        </div>
      }
      { !isLoading &&
        <>
          { error && <Navigate to='*' /> }
          <Routes>
            <Route index element={<Navigate replace to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/quiz/:decade' element={<Quiz songData={songData}/>} />
            <Route path='/*' element={<Error error={'Oops! Looks like this page doesn\'t exist.'} />} />
          </Routes>
        </>
      }
      {error && <Error error={error} />}
      <Footer />
    </div>
  );
}

export default App;