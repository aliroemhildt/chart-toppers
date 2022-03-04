import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = ({ songData }) => {
  const { decade } = useParams();

  const [count, setCount] = useState(0);
  const [years, setYears] = useState(songData[decade]);

  console.log(years)
  
  return (count <= 9) ? (
    <>
      <Question songs={years[count]}/>
      <button onClick={() => setCount(count + 1)}>next</button>
    </>
  ) : (
    <div>
      <p>You did it!!!</p>
      <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default Quiz;