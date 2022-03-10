import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className='tagline-container'>
        <p className='tagline'>Put your music knowledge to the test...</p>
      </div>
      <div className='title-container'>
        <Link className='home-link' to='/'>CHART TOPPERS</Link>
      </div>
    </header>
  )
}

export default Header;