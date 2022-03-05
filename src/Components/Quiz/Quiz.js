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
  }, [])

  const getCorrectAnswers = () => {
    allSongs.forEach(item => {
      const year = Object.keys(item)[0];
      setCorrectAnswers({
        ...correctAnswers,
        [year]: item[year].song1.id
      });
    })
  }

  const handleClick = (event) => {
    set
  }

  return (questionCount <= 9) ? (
    <>
      <Question
        songs={allSongs[questionCount]}
        score={score}
        setScore={setScore}
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