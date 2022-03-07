import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { shape, objectOf, arrayOf, number, string } from 'prop-types';
import Question from '../Question/Question';
import Error from '../Error/Error';
import './Quiz.scss';

const Quiz = ({ songData }) => {
  const { decade } = useParams();
  const [questionCount, setQuestionCount] = useState(0);
  const [allSongs, setAllSongs] = useState(songData[decade]);
  const [score, setScore] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState({});
  const [playerAnswers, setPlayerAnswers] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    checkParams();
  }, []);

  const checkParams = () => {
    const validDecades = ['1980s', '1990s', '2000s', '2010s'];
    if (!validDecades.includes(decade)) {
      setError('Oops! Looks like this page doesn\'t exist.')
    } else {
      getCorrectAnswers();
    }
  }

  const getCorrectAnswers = () => {
    const allCorrectAnswers = allSongs.reduce((acc, item) => {
      const year = Object.keys(item)[0];
      const song = item[year].song1;
      acc = {
        ...acc,
        [year]: song
      }
      return acc;
    }, {});
    setCorrectAnswers(allCorrectAnswers);
  }

  const updateScore = () => {
    let newScore = 0;
    const keys = Object.keys(playerAnswers);
    keys.forEach(key => {
      if (playerAnswers[key].id === correctAnswers[key].id) {
        newScore += 1;
      }
    });
    setScore(newScore);
  }

  const handleClick = (song) => {
    const year = Object.keys(allSongs[questionCount])[0];
    setPlayerAnswers({
      ...playerAnswers,
      [year]: song
    });
    setQuestionCount(questionCount + 1);
    updateScore();
  }

  const renderCards = (songs) => {
    const keys = Object.keys(songs);
    return keys.map(key => {
      return (
        <div className='song-card' key={songs[key].id}>
          <img src={songs[key].image_url} />
          <p className='title'>{songs[key].title}</p>
          <p className='artist'>{songs[key].artist.toUpperCase()}</p>
        </div>
      );
    });
  }

  if (!allSongs && !error) {
    return <p>loading...</p>
   } else if (error) {
    return (
      <Error error={'Oops! Looks like this page doesn\'t exist.'} />
    )
  } else if (questionCount < allSongs.length) {
    return (
      <div className='question-container'>
        <Question
          songs={allSongs[questionCount]}
          year={Object.keys(allSongs[questionCount])[0]}
          handleClick={handleClick}
        />
      </div>
    )
  } else if (questionCount === allSongs.length) {
    return (
      <div className='results-container'>
        <p className='score'>Score: {score}/{allSongs.length}</p>
        <div className='player-answers'>
          <p>Your Guesses:</p>
          {renderCards(playerAnswers)}
        </div>
        <div className='correct-answers'>
          <p>Answers:</p>
          {renderCards(correctAnswers)}
        </div>
        <Link to='/'>Back to Home</Link>
      </div>
    )
  }
}

Quiz.propTypes = {
  songData: shape({
    '1980s': arrayOf(objectOf(objectOf(shape({
      artist: string,
      id: number,
      title: string,
      image_url: string
    })))),
    '1990s': arrayOf(objectOf(objectOf(shape({
      artist: string,
      id: number,
      title: string,
      image_url: string
    })))),
    '2000s': arrayOf(objectOf(objectOf(shape({
      artist: string,
      id: number,
      title: string,
      image_url: string
    })))),
    '2010s': arrayOf(objectOf(objectOf(shape({
      artist: string,
      id: number,
      title: string,
      image_url: string
    }))))
  }).isRequired
}

export default Quiz;