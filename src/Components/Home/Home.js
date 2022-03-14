import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
  <div className='home-container'>
    <p className='instructions'>Choose a decade:</p>
    <div className='quiz-button-container'>
      <Link to='/quiz/1980s' className='quiz-link'>
        <button className='quiz-button one'>1980's</button>
      </Link>
      <Link to='/quiz/1990s' className='quiz-link'>
        <button className='quiz-button two'>1990's</button>
      </Link>
      <Link to='/quiz/2000s' className='quiz-link'>
        <button className='quiz-button three'>2000's</button>
      </Link>
      <Link to='/quiz/2010s' className='quiz-link'>
        <button className='quiz-button four'>2010's</button>
      </Link>
    </div>
  </div>
  );
}

export default Home;