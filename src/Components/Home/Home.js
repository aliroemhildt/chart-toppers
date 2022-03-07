import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
  <div className='home-container'>
    <p className='instructions'>Choose a decade:</p>
    <div className='quiz-button-container'>
      <Link to='/quiz/1980s'>
        <button className='quiz-button one'>1980's</button>
      </Link>
      <Link to='/quiz/1990s'>
        <button className='quiz-button two'>1990's</button>
      </Link>
      <Link to='/quiz/2000s'>
        <button className='quiz-button three'>2000's</button>
      </Link>
      <Link to='/quiz/2010s'>
        <button className='quiz-button four'>2010's</button>
      </Link>
    </div>
  </div>
  );
}

export default Home;