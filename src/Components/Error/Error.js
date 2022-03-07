import { Link } from 'react-router-dom';
import './Error.scss';

const Error = ({ error }) => {
  console.log(typeof error)
  return (
    <div className='error-container'>
      <p className='error-message'>{ error }</p>
      {!error.includes('5') && 
        <Link className='error-link' to='/home'>Take me to Chart Toppers home page</Link>
      }
    </div>
  );
}

export default Error;