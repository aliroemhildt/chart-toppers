import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <h1 className='page-title'>Chart Toppers</h1>
      </Link>
      {/* <NavLink to='/about'>About</NavLink> */}
    </header>
  )
}

export default Header;