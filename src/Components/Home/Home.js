import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <main>
      <Link to='/quiz/1980s'>1980s</Link>
      <Link to='/quiz/1990s'>1990s</Link>
      <Link to='/quiz/2000s'>2000s</Link>
      <Link to='/quiz/2010s'>2010s</Link>
    </main>
  );
}

export default Home;