import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <h1>Chart Toppers</h1>
      </Link>
      {/* <NavLink to='/about'>About</NavLink> */}
    </header>
  )
}

export default Header;