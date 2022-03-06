import { Link } from 'react-router-dom';
import './Home.scss';

const Home = (props) => {
  return (
    <main>
      <Link to='/quiz/1980s'>
        <button className='quiz-button'>1980's</button>
      </Link>
      <Link to='/quiz/1990s'>
        <button className='quiz-button'>1990's</button>
      </Link>
      <Link to='/quiz/2000s'>
        <button className='quiz-button'>2000's</button>
      </Link>
      <Link to='/quiz/2010s'>
        <button className='quiz-button'>2010's</button>
      </Link>
    </main>
  );
}

export default Home;