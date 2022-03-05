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

  const handleClick = (id) => {
    const year = Object.keys(allSongs[questionCount])[0];
    const songId = id;

    setPlayerAnswers({
      ...playerAnswers,
      [year]: songId
    });
  }

  return (questionCount < allSongs.length) ? (
    <>
      <Question
        songs={allSongs[questionCount]}
        score={score}
        setScore={setScore}
        handleClick={handleClick}
      />
      <button onClick={() => setQuestionCount(questionCount + 1)}>next</button>
    </>
  ) : (
    <div>
      <p>You did it!!!</p>
      <Link to='/'>Back to Home</Link>
      {/* {display score here} */}
    </div>
  )
}

export default Quiz;