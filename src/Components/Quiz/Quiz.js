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
      const songId = item[year].song1.id;
      
      acc = {
        ...acc,
        [year]: songId
      }

      return acc;
    }, {});

    setCorrectAnswers(allCorrectAnswers);
  }

  updateScore = () => {
    score = 0;
    for (let i = 0; i <= questionCount; i++) {
      
    }
  }

  const handleClick = (id) => {
    const year = Object.keys(allSongs[questionCount])[0];
    const songId = id;

    setPlayerAnswers({
      ...playerAnswers,
      [year]: songId
    });

    setQuestionCount(questionCount + 1);
    setScore
  }

  return (questionCount < allSongs.length) ? (
    <Question
      songs={allSongs[questionCount]}
      year={Object.keys(allSongs[questionCount])[0]}
      score={score}
      setScore={setScore}
      handleClick={handleClick}
    />
  ) : (
    <div>
      <p>Score: </p>
      <Link to='/'>Back to Home</Link>
      {/* {display score here} */}
    </div>
  )
}

export default Quiz;