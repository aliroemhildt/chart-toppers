import { Link } from 'react-router-dom';

const Error = ({ error }) => {
  console.log(typeof error)
  return (
    <div>
      <p>{ error }</p>
      {!error.includes('5') && 
        <Link to='/home'>Take me to Chart Toppers home page</Link>
      }
    </div>
  );
}

export default Error;