import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = ({ songData }) => {
  const { decade } = useParams();
  const [questionCount, setQuestionCount] = useState(0);
  const [allSongs, setAllSongs] = useState(songData[decade]);
  const [score, setScore] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState({});
  const [playerAnswers, setPlayerAnswers] = useState({});

  useEffect(() => {
    getCorrectAnswers();
  }, []);

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
        <div key={songs[key].id}>
          <img src={songs[key].image_url} />
          <p>{songs[key].title}</p>
          <p>{songs[key].artist}</p>
        </div>
      );
    });
  }

  return (
    questionCount < allSongs.length ? (
    <Question
      songs={allSongs[questionCount]}
      year={Object.keys(allSongs[questionCount])[0]}
      handleClick={handleClick}
    />
    ) : (
    <div>
      <p>Score: {score}/{allSongs.length}</p>
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
  );
}

export default Quiz;