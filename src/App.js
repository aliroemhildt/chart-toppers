import React, { useState } from 'react';
import './App.scss';
import { getSongs } from './apiCalls';

const App = () => {
  const [allSongs, setAllSongs] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState('');

  const getAllSongs = async () => {
    getSongs()
      .then(data => setAllSongs)
  }

  return (
    <div className="App">
      <p>Test</p>
    </div>
  );
}

export default App;
