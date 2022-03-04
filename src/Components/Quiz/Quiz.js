import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = ({ songData }) => {
  const { decade } = useParams();

  const [questionCount, setQuestionCount] = useState(0);
  const [years, setYears] = useState(songData[decade]);
  const [score, setScore] = useState({
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null
  })

  return (questionCount <= 9) ? (
    <>
      <Question
        songs={years[questionCount]}
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