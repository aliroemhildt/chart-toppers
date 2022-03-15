import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { shape, objectOf, arrayOf, number, string } from 'prop-types';
import Question from '../Question/Question';
import Error from '../Error/Error';
import Results from '../Results/Results';

const Quiz = ({ songData }) => {
  const { decade } = useParams();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [allSongs, setAllSongs] = useState({});
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState({});
  const [playerAnswers, setPlayerAnswers] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    checkParams();
  }, []);

  useEffect(() => {
    if (!error && questionIndex === allSongs.length) {
      calculateScore();
    }
  }, [playerAnswers])

  const checkParams = () => {
    const validDecades = ['1980s', '1990s', '2000s', '2010s'];
    if (!validDecades.includes(decade)) {
      setError('Oops! Looks like this page doesn\'t exist.')
    } else {
      setAllSongs(songData[decade]);
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

  const calculateScore = () => {
    const keys = Object.keys(correctAnswers);
    const finalScore = keys.reduce((acc, key) => {
      if (playerAnswers[key].id === correctAnswers[key].id) {
        acc++;
      }
      return acc;
    }, 0);
    setScore(finalScore);
  }

  const handleClick = (song) => {
    const year = Object.keys(allSongs[questionIndex])[0];
    setPlayerAnswers({
      ...playerAnswers,
      [year]: song
    });
    setQuestionIndex(questionIndex + 1);
  }

  const loading = (!error && !allSongs) &&
    <p className='loading-message'>loading...</p>
  const errorMessage = error &&
    <Error error={'Oops! Looks like this page doesn\'t exist.'} />
  const question = (!error && questionIndex < allSongs.length) &&
      <Question
        songs={allSongs[questionIndex]}
        year={Object.keys(allSongs[questionIndex])[0]}
        handleClick={handleClick}
      />
  const results = (!error && questionIndex === allSongs.length) &&
    <Results
      score={score}
      correctAnswers={correctAnswers}
      playerAnswers={playerAnswers}
    />

  return (
    <>
      {loading}
      {errorMessage}
      {question}
      {results}
    </>
  );
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